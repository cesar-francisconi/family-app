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
import { getActorMoviesById } from '@/src/hook/useMovie';
import {
    ActorExplorerLocalSearchParams,
    ActorExplorerProps,
} from '@/src/screen/ActorExplorer/types';

export default function ActorExplorer(props: ActorExplorerProps) {

    const {

    } = props;

    const {
        actorId,
    } = useLocalSearchParams<ActorExplorerLocalSearchParams>();

    const [data, setData] = useState<Movie[] | null>(null);

    useEffect(() => {
        (async () => {
            const data = await getActorMoviesById(actorId);

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