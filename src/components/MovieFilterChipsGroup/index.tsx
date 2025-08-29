import {
    View,
} from 'react-native';
import { styles } from './styles';
import { MovieFilterChipsGroupProps } from './types';
import { MovieFilterChips } from '../MovieFilterChips';
import {
    OrderOptions,
} from '@/src/helpers/extractMovieFilters';
import {
    useState,
} from 'react';
import { useOnFilterChipPressed } from '@/src/hook/useOnFilterChipPressed';
import { useFilterMovies } from '@/src/hook/useFilterMovies';
import { useMovieFilters } from '@/src/hook/useMovieFilters';

export function MovieFilterChipsGroup(props: MovieFilterChipsGroupProps) {

    const {
        chipOptions,
        setIsFiltering,
    } = props;

    const [actor, setActor] = useState('Tudo');
    const [genre, setGenre] = useState('Tudo');
    const [year, setYear] = useState('Tudo');
    const [order, setOrder] = useState<OrderOptions>('Popularidade');

    const onFilterChipPressed = useOnFilterChipPressed(setIsFiltering);

    const movieFilters = useMovieFilters();

    useFilterMovies({ actor, genre, year, order });

    if (!movieFilters) return;

    return (
        <View
            style={styles.mainContainer}
        >
            <View style={styles.container}>
                {movieFilters.map((filterOptions, index) => {
                    return <MovieFilterChips
                        key={index}
                        filterOptions={filterOptions}
                        filterCategoryIndex={index}
                        chipOptions={chipOptions}
                        setActor={setActor}
                        setGenre={setGenre}
                        setYear={setYear}
                        setOrder={setOrder}
                        onFilterChipPressed={onFilterChipPressed}
                    />
                })}
            </View>
        </View>
    );
}


