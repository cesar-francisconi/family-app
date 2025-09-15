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
    useMemo,
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
import { ActorMovieCardCarousel } from '@/src/components/ActorMovieCardCarousel';

export default function ActorDetails(props: ActorDetailsProps) {

    const { } = props;

    const [actor, setActor] = useState<CastMember | null>(null);
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

    const infos = useMemo(() => actor && getActorInfos(actor), [actor]);

    if (!actor || !actorMovies) return <ActivityIndicator />;

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View
                style={styles.container}
            >
                {infos && <InfoList
                    infos={infos}
                />}

                <Plot
                    description={actor.description}
                    fullPlot
                />
            </View>

            <ActorMovieCardCarousel
                movies={actorMovies}
                title={'Filmes com ' + actor.name}
                actorId={actor.id}
            />
        </SafeAreaView>
    );
}