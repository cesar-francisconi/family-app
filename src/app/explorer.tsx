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
import { getMoviesByCategory } from '../helpers/getMoviesByCategory';

export default function Explorer(props: ExplorerProps) {

    const {

    } = props;

    const {
        category,
        genre,
        actorId,
    } = useLocalSearchParams<ExplorerLocalSearchParams>();

    const data = getMoviesByCategory(category, genre, actorId);

    return (
        <SafeAreaView style={styles.container}>
            <MovieCardList
                data={data}
                movieCardFlexWithTitle
            />
        </SafeAreaView>
    );
}