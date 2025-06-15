import { InfoList } from '@/src/components/InfoList';
import { MovieCardCarousel } from '@/src/components/MovieCardCarousel/Index';
import { Plot } from '@/src/components/Plot';
import { getActorById } from '@/src/helpers/getActorById';
import { getActorInfos } from '@/src/helpers/getActorInfos';
import { getActorMoviesById } from '@/src/helpers/getActorMoviesById';
import { styles } from '@/src/screen/ActorDetails/styles';
import {
    ActorDetailsLocalSearchParams,
    ActorDetailsProps,
} from '@/src/screen/ActorDetails/types';
import { useLocalSearchParams } from 'expo-router';
import {
    SafeAreaView,
    View,
} from 'react-native';

export default function ActorDetails(props: ActorDetailsProps) {

    const { } = props;

    const { actorId } = useLocalSearchParams<ActorDetailsLocalSearchParams>();

    const actor = getActorById(actorId)!;

    const infos = getActorInfos(actor);

    const actorMovies = getActorMoviesById(actor?.id);

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
                actorId={actorId}
                buttonTitle='Ver mais'
            />
        </SafeAreaView>
    );
}