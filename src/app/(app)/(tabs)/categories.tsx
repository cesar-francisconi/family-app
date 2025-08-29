import { ActivityIndicator } from '@/src/components/ActivityIndicator';
import { MovieFilterChipsGroup } from '@/src/components/MovieFilterChipsGroup';
import { MovieCardList } from '@/src/components/MovieCardList';
import { useMovies } from '@/src/hook/useMovie';
import { styles } from '@/src/screen/Categories/styles';
import { CategoriesProps } from '@/src/screen/Categories/types';
import { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
} from 'react-native';

export default function Categories(props: CategoriesProps) {

    const {

    } = props;

    const [IsFiltering, setIsFiltering] = useState(false);

    const filteredData = useMovies((state) => state.filteredData);

    useEffect(() => {
        if (filteredData) {
            setIsFiltering(false);
        };
    }, [filteredData]);

    return (
        <SafeAreaView style={styles.container}>
            <MovieFilterChipsGroup
                setIsFiltering={setIsFiltering}
            />

            {!IsFiltering ? (
                filteredData && filteredData.length > 0 ? (
                    <MovieCardList
                        data={filteredData}
                        movieCardFlexWithTitle
                    />
                ) : (
                    <Text
                        style={styles.noResultsText}
                    >Ops! Não encontramos nada com esses filtros
                    </Text>
                )
            ) : (
                <ActivityIndicator />
            )}
        </SafeAreaView>
    );
}