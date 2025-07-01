import { Movie } from '@/movie';
import { MovieListItemGroup } from '@/src/components/MovieListItemGroup';
import { getMoviesYouLiked } from '@/src/hook/useUser';
import { styles } from '@/src/screen/MoviesYouLiked/styles';
import { YouLikedProps } from '@/src/screen/MoviesYouLiked/types';
import {
    useCallback,
    useState,
} from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { ActivityIndicator } from '../../components/ActivityIndicator';
import { useFocusEffect } from 'expo-router';

export default function MoviesYouLiked(props: YouLikedProps) {

    const { } = props;

    const [movies, setMovies] = useState<Movie[] | null>(null);

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const movies = await getMoviesYouLiked();

                setMovies(movies);
            })();
        }, [])
    );

    if (!movies) return <ActivityIndicator />

    return (
        <SafeAreaView style={styles.container}>
            <MovieListItemGroup
                withTitle={false}
                data={movies}
            />
        </SafeAreaView>
    );
}