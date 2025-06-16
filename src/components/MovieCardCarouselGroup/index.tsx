import {
    View,
} from 'react-native';
import { MovieCardCarouselGroupProps } from './types';
import { styles } from './styles';
import { MovieCardCarousel } from '../MovieCardCarousel/Index';
import { getMoviesForMovieCardCarouselGroup } from '@/src/helpers/getMoviesForMovieCardCarouselGroup';

export function MovieCardCarouselGroup(props: MovieCardCarouselGroupProps) {

    const {

    } = props;

    const movies = getMoviesForMovieCardCarouselGroup(['Todos', 'Drama', 'Ação']);

    return (
        <View style={styles.container}>
            {movies.map((item, index) => {
                return (
                    <MovieCardCarousel
                        key={index}
                        {...item}
                        buttonTitle='Ver mais'
                        withMovieCardTitle
                    />
                );
            })}
        </View>
    );
}

