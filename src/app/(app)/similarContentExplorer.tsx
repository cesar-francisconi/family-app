import { MovieCardList } from '@/src/components/MovieCardList';
import { styles } from '@/src/screen/Explorer/styles';
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
import { getMoviesByGenre } from '@/src/hook/useMovie';
import {
    SimilarContentExplorerLocalSearchParams,
    SimilarContentExplorerProps,
} from '@/src/screen/SimilarContentExplorer/types';

export default function SimilarContentExplorer(props: SimilarContentExplorerProps) {

    const {

    } = props;

    const {
        genre,
    } = useLocalSearchParams<SimilarContentExplorerLocalSearchParams>();

    const [data, setData] = useState<Movie[] | null>(null);

    useEffect(() => {
        (async () => {
            const data = await getMoviesByGenre(genre);

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