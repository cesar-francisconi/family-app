import {
    SafeAreaView,
    View,
} from 'react-native';
import {
    useLocalSearchParams,
    useNavigation,
} from 'expo-router';
import {
    MoreLocalSearchParams,
    MoreProps
} from '@/src/screen/More/types';
import { InfoList } from '@/src/components/InfoList';
import { Plot } from '@/src/components/Plot';
import { Cast } from '@/src/components/Cast';
import { styles } from '@/src/screen/More/styles';
import { getMovieById } from '@/src/hook/useMovie';
import { getMovieInfos } from '@/src/helpers/getMovieInfos';
import {
    useEffect,
    useState,
} from 'react';
import { Movie } from '@/movie';
import { ActivityIndicator } from '@/src/components/ActivityIndicator';

export default function More(props: MoreProps) {

    const {

    } = props;

    const [movie, setMovie] = useState<Movie | null>(null);

    const { movieId } = useLocalSearchParams<MoreLocalSearchParams>();

    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const movie = await getMovieById(movieId);

            setMovie(movie);
        })();
    }, []);

    useEffect(() => {
        if (!movie) return;

        if (movie.title) {
            navigation.setOptions({ title: movie.title });
        }
    }, [movie, navigation]);

    if (!movie) return <ActivityIndicator />

    const INFOS = getMovieInfos(movie);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View
                style={styles.container}
            >
                <InfoList
                    infos={INFOS}
                />

                <Plot
                    withTitle={false}
                    withButton={false}
                    description={movie.description}
                    fullPlot
                />

                <Cast
                    data={movie.cast}
                    title='Elenco'
                />
            </View>
        </SafeAreaView>
    );
}



