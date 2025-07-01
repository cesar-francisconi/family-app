import {
    CastMember,
    Movie,
} from '@/movie';
import { InfoList } from '@/src/components/InfoList';
import { MovieCardCarousel } from '@/src/components/MovieCardCarousel/Index';
import { Plot } from '@/src/components/Plot';
import { getActorInfos } from '@/src/helpers/getActorInfos';
import { styles } from '@/src/screen/ActorDetails/styles';
import {
    ActorDetailsLocalSearchParams,
    ActorDetailsProps,
} from '@/src/screen/ActorDetails/types';
import { useLocalSearchParams } from 'expo-router';
import {
    useEffect,
    useState,
} from 'react';
import {
    SafeAreaView,
    View,
} from 'react-native';
import { ActivityIndicator } from '../../components/ActivityIndicator';
import {
    getActorById,
    getActorMoviesById,
} from '@/src/hook/useMovie';

export default function ActorDetails(props: ActorDetailsProps) {

    const { } = props;

    const [actor, setActor] = useState<CastMember | undefined>(undefined);
    const [actorMovies, setActorMovies] = useState<Movie[] | null>(null);

    const { actorId } = useLocalSearchParams<ActorDetailsLocalSearchParams>();

    useEffect(() => {
        (async () => {
            const actor = await getActorById(actorId)!;

            if (!actor) return;

            const actorMovies = await getActorMoviesById(actor.id);

            setActorMovies(actorMovies);
            setActor(actor);
        })();
    }, []);

    if (!actor || !actorMovies) return <ActivityIndicator />;

    const infos = getActorInfos(actor);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View
                style={styles.container}
            >
                <InfoList
                    infos={infos}
                />

                <Plot
                    description={actor.description}
                    fullPlot
                />
            </View>

            <MovieCardCarousel
                movies={actorMovies}
                category={'Filmes com'}

            />
        </SafeAreaView>
    );
}