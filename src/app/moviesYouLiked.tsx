import { MovieListItemGroup } from '@/src/components/MovieListItemGroup';
import { getMyLikedMoviesListMovies } from '@/src/hook/useUser';
import { styles } from '@/src/screen/MoviesYouLiked/styles';
import { YouLikedProps } from '@/src/screen/MoviesYouLiked/types';
import {
    SafeAreaView,
} from 'react-native';

export default function MoviesYouLiked(props: YouLikedProps) {

    const { } = props;

    const movies = getMyLikedMoviesListMovies();

    return (
        <SafeAreaView style={styles.container}>
            <MovieListItemGroup
                withTitle={false}
                data={movies}
            />
        </SafeAreaView>
    );
}