import { SearchHistory } from '@/src/components/SearchHistory';
import { MovieListItemGroup } from '@/src/components/MovieListItemGroup';
import { MovieCardList } from '@/src/components/MovieCardList';
import { Search } from '@/src/components/Search';
import { styles } from '@/src/screen/Search/styles';
import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import {
    SafeAreaView,
    TextInput,
    View,
} from 'react-native';
import {
    getUserSearchHistory,
    setUserSearchHistory,
} from '../../hook/useUser';
import { Movie } from '@/movie';
import { ActivityIndicator } from '../../components/ActivityIndicator';
import {
    filterMoviesBySearchTerm,
    sortByPopularity,
} from '@/src/hook/useMovie';
import { ChipProps } from '@/src/components/Chip/types';
import { SearchProps } from '@/src/screen/Search/types';
import { SearchProps as SearchComponentProps } from '@/src/components/Search/types';
import { useForm } from 'react-hook-form';
import { FormDataSearch, formSchemaSearch } from '@/src/helpers/formSchemaSearch';
import { zodResolver } from '@hookform/resolvers/zod';

export default function SearchScreen(props: SearchProps) {

    const { } = props;

    const searchTerm = useRef('');
    const [isReady, setIsReady] = useState(false);
    const [data, setData] = useState<Movie[] | null>(null);
    const [sSortByPopularity, setSortByPopularity] = useState<Movie[] | null>(null);
    const [searchHistory, setSearchHistory] = useState<string[] | null>(null);

    useEffect(() => {
        const unsubscribe = getUserSearchHistory((newSearchHistory) => {
            setSearchHistory(newSearchHistory);
        });

        return () => {
            if (!unsubscribe) return;

            unsubscribe();
        };
    }, []);

    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
        const timeout = setTimeout(() => inputRef.current?.focus(), 400);
        return () => clearTimeout(timeout);
    }, []);

    const {
        control,
        handleSubmit,
        setValue,
        watch,
    } = useForm<FormDataSearch>({
        defaultValues: {
            search: "",
        },
        resolver: zodResolver(formSchemaSearch),
    });

    const searchValue = watch("search");

    useEffect(() => {
        if (searchValue === '') setIsReady(false);
    }, [searchValue]);

    const handleSearch = async (data: FormDataSearch) => {
        const trimmedInput = data.search.trim();

        const results = await filterMoviesBySearchTerm(data.search);
        searchTerm.current = trimmedInput;
        setUserSearchHistory(trimmedInput);
        setData(results);
        setIsReady(true);
        setValue('search', trimmedInput);
    };

    const buttonOptions = useMemo((): SearchComponentProps['buttonOptions'] => ({
        title: 'Pesquisar',
        onPress: handleSubmit(handleSearch),
    }), [handleSubmit, handleSearch]);

    useEffect(() => {
        (async () => {
            const popularity = await sortByPopularity();

            setSortByPopularity(popularity);
        })();
    }, []);

    const fnSearchHistoryChip = useCallback((item: string) => {
        setValue('search', item);
    }, [setValue]);

    const chipOptions = useMemo((): Omit<ChipProps, 'text'> => ({
        textStyle: {
            textTransform: 'none',
        }
    }), []);

    if (!searchHistory) return <ActivityIndicator />

    return (
        <SafeAreaView style={styles.container}>
            <Search
                control={control}
                name='search'
                ref={inputRef}
                placeholder='Pesquise por um filme, gênero, e.t.c'
                buttonOptions={buttonOptions}
            />

            <View
                style={styles.contentContainer}
            >
                <SearchHistory
                    withTitle
                    chipOptions={chipOptions}
                    searchHistory={searchHistory}
                    title='Histórico de pesquisa'
                    fnSearchHistoryChip={fnSearchHistoryChip}
                />

                {isReady ? (
                    data ? (
                        <MovieCardList
                            data={data}
                            withTitle={isReady}
                            firstTitle="Resultado para"
                            secondTitle={searchTerm.current.trim()}
                        />
                    ) : (
                        <ActivityIndicator />
                    )
                ) : (
                    sSortByPopularity ? (
                        <MovieListItemGroup
                            data={sSortByPopularity}
                            title="Filmes recomendados"
                        />
                    ) : (
                        <ActivityIndicator />
                    )
                )}
            </View>
        </SafeAreaView>
    );
}