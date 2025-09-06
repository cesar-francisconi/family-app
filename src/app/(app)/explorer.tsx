import { MovieCardList } from '@/src/components/MovieCardList';
import { styles } from '@/src/screen/Explorer/styles';
import {
    ExplorerLocalSearchParams,
    ExplorerProps,
} from '@/src/screen/Explorer/types';
import { useLocalSearchParams } from 'expo-router';
import {
    SafeAreaView,
} from 'react-native';
import {
    useEffect,
    useState,
} from 'react';
import { Movie } from '@/movie';
import { ActivityIndicator } from '@/src/components/ActivityIndicator';
import { getMoviesByTitle } from '@/src/hook/useMovie';

export default function Explorer(props: ExplorerProps) {

    const {

    } = props;

    const {
        title,
        genre,
    } = useLocalSearchParams<ExplorerLocalSearchParams>();

    const [data, setData] = useState<Movie[] | null>(null);

    useEffect(() => {
        (async () => {
            const data = await getMoviesByTitle(title, genre);

            setData(data);
        })();
    }, []);

    if (!data) return <ActivityIndicator />;

    return (
        <SafeAreaView style={styles.container}>
            <MovieCardList
                data={data}
                movieCardFlexWithTitle
            />
        </SafeAreaView>
    );
}