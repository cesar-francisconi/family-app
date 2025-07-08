import { ActionButtons } from '@/src/components/ActionButtons';
import { CommentActionRow } from '@/src/components/CommentActionRow';
import { Icon } from '@/src/components/Icon';
import { MovieCardCarousel } from '@/src/components/MovieCardCarousel/Index';
import { MovieTitle } from '@/src/components/MovieTitle';
import { Plot } from '@/src/components/Plot';
import {
    getMovieById,
    getMoviesByGenre,
    setCurrentMovieId,
} from '@/src/hook/useMovie';
import { styles } from '@/src/screen/Details/styles';
import {
    DetailsLocalSearchParams,
    DetailsProps,
} from '@/src/screen/Details/types';
import {
    useFocusEffect,
    useLocalSearchParams,
    useRouter,
} from 'expo-router';
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDebounce } from '../../../helpers/debounce';
import {
    useCallback,
    useEffect,
    useState,
} from 'react';
import {
    getLoggedInUserAvatar,
    getLoggedInUserBackground,
    getLoggedInUserUsername,
} from '../../../hook/useUser';
import { Colors } from '@/src/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Movie } from '@/movie';
import { ActivityIndicator } from '@/src/components/ActivityIndicator';
import { getInitialsFromUsername } from '@/src/helpers/getInitialsFromUsername';
import { AvatarProps } from '@/src/components/Avatar/types';

export const detailsMovieCardHeight = 216;
export const screenHeight = Dimensions.get('window').height;

export default function Details(props: DetailsProps) {

    const { } = props;

    const { movieId } = useLocalSearchParams<DetailsLocalSearchParams>();

    const [movie, setMovie] = useState<Movie | null>(null);
    const [similarContentMovies, setSimilarContentMovies] = useState<Movie[] | null>(null);

    const username = getLoggedInUserUsername();

    useFocusEffect(
        useCallback(() => {
            setCurrentMovieId(movieId);

            return () => {

            };
        }, [movieId])
    );

    useEffect(() => {
        (async () => {
            const movie = await getMovieById(movieId);

            setMovie(movie);
        })();
    }, []);

    useEffect(() => {
        setCurrentMovieId(movieId);
    }, [movieId]);

    const { debounce } = useDebounce(1000);

    useEffect(() => {
        (async () => {
            if (!movie) return;

            const similarContentMovies = await getMoviesByGenre(movie.genre[0]);

            setSimilarContentMovies(similarContentMovies);
        })();
    }, [movie]);


    const route = useRouter();

    const lineageGradientHeight = detailsMovieCardHeight * 2;

    const avatar = getLoggedInUserAvatar();

    const avatarOptions: AvatarProps = avatar ? {
        mode: 'image',
        imageUrl: avatar,
    } : {
        mode: 'initial',
        initial: getInitialsFromUsername(username),
        background: getLoggedInUserBackground(),
    };

    if (!username) return;

    if (!movie || !similarContentMovies) return <ActivityIndicator />

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View
                style={styles.movieMainCardContainer}
            >
                <Image
                    style={[styles.movieMainCard, {
                        height: detailsMovieCardHeight,
                    }]}
                    src={movie.thumbnail}
                />

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => { }}
                    style={styles.playCircleButton}
                >

                    <Icon
                        name='Ionicons'
                        icon='play-sharp'
                        size='large'
                        color={Colors.inverseSurface.on}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}
            >
                <View
                    style={styles.container}
                >
                    <MovieTitle
                        title={movie.title}
                        withDetails
                        time={movie.time}
                        date={movie.date}
                    />

                    <Plot
                        description={movie.description}
                        buttonTitle='Mais'
                        withButton
                        withTitle={false}
                        fnButton={() => debounce(() => route.push(`/(app)/(details)/(more)/more?movieId=${movieId}`))}
                    />

                    <ActionButtons
                        id={movieId}
                    />

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => debounce(() => route.push(`/(app)/(details)/(comments)/comment?movieId=${movieId}`))}
                    >
                        <CommentActionRow
                            avatarOptions={{
                                ...avatarOptions,
                            }}
                            count={movie.comments.length}
                            title='Comentários'
                            addCommentOptions={{
                                text: 'Adicione um comentário...',
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {!similarContentMovies ? (
                    <ActivityIndicator />
                )
                    :
                    (<MovieCardCarousel
                        movies={similarContentMovies}
                        category='Conteúdos similares'
                    />)}
            </ScrollView>

            <LinearGradient
                style={[styles.linearGradient, {
                    height: lineageGradientHeight,
                }]}
                colors={[movie.averageColor, Colors.surface.main]}
            />
        </SafeAreaView >
    );
}