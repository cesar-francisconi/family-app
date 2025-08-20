import { ActionButtons } from '@/src/components/ActionButtons';
import { CommentActionRow } from '@/src/components/CommentActionRow';
import { Icon } from '@/src/components/Icon';
import { MovieCardCarousel } from '@/src/components/MovieCardCarousel/Index';
import { MovieTitle } from '@/src/components/MovieTitle';
import { Plot } from '@/src/components/Plot';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoSource, VideoView } from 'expo-video';
import {
    getMovieById,
    getMoviesByGenre,
    setCurrentMovie,
    setCurrentMovieCommentCount,
    setCurrentMovieComments,
    setCurrentMovieId,
} from '@/src/hook/useMovie';
import { styles } from '@/src/screen/Details/styles';
import {
    DetailsLocalSearchParams,
    DetailsProps,
} from '@/src/screen/Details/types';
import {
    useLocalSearchParams,
    useNavigationContainerRef,
    useRouter,
} from 'expo-router';
import {
    AppState,
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    View,
} from 'react-native';
import { useDebounce } from '../../../helpers/debounce';
import {
    useEffect,
    useRef,
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
import { useIsFocused } from '@react-navigation/native';
import { usePathName } from '@/src/hook/usePathname';
import { formatArrayToString } from '@/src/helpers/formatArraytoString';
import { TouchableOpacity } from '@gorhom/bottom-sheet';

export const detailsMovieCardHeight = 216;
export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

const videoSourceInitial: VideoSource = {
    uri: '',
    metadata: {
        title: '',
        artist: '',
        artwork: '',
    },
};

type Routes = 'index' | '(more)' | 'more' | 'search' | '(comments)' | 'comments' | 'answers';

export default function Details(props: DetailsProps) {

    const { } = props;

    const { movieId } = useLocalSearchParams<DetailsLocalSearchParams>();

    const navigationRef = useNavigationContainerRef();

    const getRouteName = navigationRef.getCurrentRoute as () => { name: Routes } | undefined;

    // Função para voltar na navegação quando a animação terminar
    const currentRouteName = getRouteName()?.name;

    const [movie, setMovie] = useState<Movie | null>(null);
    const [similarContentMovies, setSimilarContentMovies] = useState<Movie[] | null>(null);
    const [isInitialStartMovie, setIsInitialStartMovie] = useState(false);
    const [videoSource, setVideoSource] = useState<VideoSource | null>(videoSourceInitial);

    const username = getLoggedInUserUsername();

    const pathname = usePathName();

    const isFocused = useIsFocused(); // true quando a tela está visível

    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false; // sinaliza que desmontou
        };
    }, []);

    // Cria uma função segura
    function safePause() {
        try {
            if (isMounted.current && player) {
                player.pause();
            }
        } catch (e) {
            // console.warn('Tentou pausar mas o player já foi liberado');
        }
    }

    useEffect(() => {
        const subscription = AppState.addEventListener('change', (state) => {
            if (state !== 'active') {
                safePause();
            };
        });

        return () => {
            subscription.remove();
        };
    }, []);

    useEffect(() => {
        if (!isFocused) {
            // Só pausa se ainda estiver montado
            if (isMounted.current && currentRouteName === '(more)') {

            } else if (isMounted.current && currentRouteName === 'more') {

            } else if (isMounted.current && currentRouteName === '(comments)') {

            } else if (isMounted.current && currentRouteName === 'comments') {

            } else if (isMounted.current && currentRouteName === 'answers') {

            } else {
                player.pause();
            };
        } else {
            setCurrentMovieId(movieId);
        };
    }, [isFocused, currentRouteName]);

    useEffect(() => {
        (async () => {
            const movie = await getMovieById(movieId);

            if (!movie) return;

            setVideoSource({
                uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                metadata: {
                    title: movie.title,
                    artist: formatArrayToString(movie.cast.map((actor) => actor.name)),
                    artwork: movie.thumbnail,
                },
            });

            setCurrentMovieComments(movie.comments);

            setCurrentMovie(movie);

            setCurrentMovieCommentCount(movie.comments.length);

            setMovie(movie);
        })();
    }, []);

    const { debounce } = useDebounce();

    useEffect(() => {
        (async () => {
            if (!movie) return;

            const similarContentMovies = await getMoviesByGenre(movie.genre[0]);

            setSimilarContentMovies(similarContentMovies);
        })();
    }, [movie]);

    const player = useVideoPlayer(videoSource, (player) => {
        player.loop = true;
    });

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

    const { isPlaying } = useEvent(player, 'playingChange', {
        isPlaying: player.playing,
    });

    useEffect(() => {
        if (isPlaying) {
            setIsInitialStartMovie(true);
        };
    }), [isPlaying];

    const videoRef = useRef<VideoView>(null);

    if (!username) return;

    if (!movie || !similarContentMovies) return <ActivityIndicator />

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View
                style={styles.movieMainCardContainer}
            >
                <VideoView
                    style={[styles.video, {
                        width: screenWidth,
                        height: detailsMovieCardHeight,
                        backgroundColor: Colors.surface.main,
                    }]}
                    player={player}
                    allowsFullscreen
                    contentFit='cover'
                    ref={videoRef}
                />

                {!isInitialStartMovie && (<View
                    style={{
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            if (!isPlaying) {
                                player.play();
                            };
                        }}
                        style={styles.movieMainCardThumbnailContainer}
                    >
                        <Image
                            style={[styles.movieMainCard, {
                                width: screenWidth,
                                height: detailsMovieCardHeight,
                                backgroundColor: Colors.surface.main,
                            }]}
                            src={movie.thumbnail}
                        />

                        <View
                            style={styles.playCircleButton}
                        >

                            <Icon
                                name='Ionicons'
                                icon='play-sharp'
                                size='large'
                                color={Colors.inverseSurface.on}
                            />
                        </View>
                    </TouchableOpacity>
                </View>)}
            </View>

            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false}
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
                        fnButton={() => debounce(() => {
                            route.push(`/(app)/(details)/(more)/more?movieId=${movieId}`);
                        }, 1000)
                        }
                    />

                    <ActionButtons
                        id={movieId}
                    />

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => debounce(() => {
                            route.push(`/(app)/(details)/(comments)/comments?movieId=${movieId}`);
                        }, 1000)}
                    >
                        <CommentActionRow
                            avatarOptions={{
                                ...avatarOptions,
                            }}
                            title='Comentários'
                            addCommentOptions={{
                                placeholder: 'Adicione um comentário...',
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