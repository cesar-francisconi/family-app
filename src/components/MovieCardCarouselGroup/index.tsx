import {
    View,
} from 'react-native';
import { MovieCardCarouselGroupProps } from './types';
import { styles } from './styles';
import { MovieCardCarousel } from '../MovieCardCarousel/Index';
import React, {
    useEffect,
    useState,
} from 'react';
import { Movie } from '@/movie';
import { ActivityIndicator } from '../ActivityIndicator';
import { getMoviesForMovieCardCarouselGroup } from '@/src/hook/useMovie';

export const MovieCardCarouselGroup = React.memo((props: MovieCardCarouselGroupProps) => {

    const {

    } = props;

    const [movies, setMovies] = useState<{
        id: string;
        title: string;
        movies: Movie[];
    }[] | null>(null);

    useEffect(() => {
        (async () => {
            const movies = await getMoviesForMovieCardCarouselGroup(['Todos', 'Ficção Científica', 'Crime']);

            setMovies(movies);
        })();
    }, []);

    if (!movies) return <ActivityIndicator />

    return (
        <View style={styles.container}>
            {movies.map((item, index) => {
                return (
                    <MovieCardCarousel
                        key={index}
                        {...item}
                    />
                );
            })}
        </View>
    );
});

