import { ChipsList } from '@/src/components/ChipsList';
import { MovieListItemGroup } from '@/src/components/MovieListItemGroup';
import { MovieCardList } from '@/src/components/MovieCardList';
import { Search } from '@/src/components/Search';
import { styles } from '@/src/screen/Search/styles';
import { SearchProps } from '@/src/screen/Search/types';
import {
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    SafeAreaView,
    TextInput,
    View,
} from 'react-native';
import { filterMoviesBySearchTerm } from '../helpers/filterMoviesBySearchTerm';
import { sortByPopularity } from '../helpers/sortByPopularity';
import {
    setSearchHistory,
    useUser,
} from '../hook/useUser';
import { Movie } from '@/movie';

export default function SearchScreen(props: SearchProps) {

    const { } = props;

    const [searchInputValue, setSearchInputValue] = useState('');
    const searchTerm = useRef('');
    const [isReady, setIsReady] = useState(false);
    const [data, setData] = useState<Movie[]>([]);

    const trimmedInput = searchInputValue.trim();

    const userSearchHistory = useUser((state) => state.searchHistory);

    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
        const timeout = setTimeout(() => inputRef.current?.focus(), 400);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (trimmedInput === '') setIsReady(false);
    }, [searchInputValue]);

    const handleSearch = () => {
        const results = filterMoviesBySearchTerm(searchInputValue);
        searchTerm.current = searchInputValue;
        setSearchHistory(trimmedInput);
        setData(results);
        setIsReady(true);
        setSearchInputValue(trimmedInput);
    };

    const buttonDisabled = trimmedInput === '';

    return (
        <SafeAreaView style={styles.container}>
            <Search
                ref={inputRef}
                value={searchInputValue}
                onChangeText={setSearchInputValue}
                placeholder='Pesquise por um filme, gênero, e.t.c'
                buttonTitle='Pesquisar'
                buttonDisabled={buttonDisabled}
                fnButton={handleSearch}
            />

            <View
                style={styles.contentContainer}
            >
                <ChipsList
                    textTransform='none'
                    data={userSearchHistory}
                    title='Histórico de pesquisa'
                    withTitle
                    fnChip={(item) => setSearchInputValue(item)}
                />

                {isReady ?
                    (< MovieCardList
                        data={data}
                        withTitle={isReady}
                        firstTitle={'Resultado para'}
                        secondTitle={searchTerm.current.trim()}
                    />)
                    :
                    (<MovieListItemGroup
                        data={sortByPopularity()}
                        title='Filmes recomendados'
                    />)
                }
            </View>
        </SafeAreaView>
    );
}