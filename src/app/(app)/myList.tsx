import { MovieListItemGroup } from '@/src/components/MovieListItemGroup';
import { getMyList } from '@/src/hook/useUser';
import { styles } from '@/src/screen/MyList/styles';
import { MylistProps } from '@/src/screen/MyList/types';
import {
    useCallback,
    useState,
} from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { ActivityIndicator } from '../../components/ActivityIndicator';
import { Movie } from '@/movie';
import { useFocusEffect } from 'expo-router';

export default function MyList(props: MylistProps) {

    const { } = props;

    const [movies, setMovies] = useState<Movie[] | null>();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const movies = await getMyList();

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