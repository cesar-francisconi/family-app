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
import { useDebounce } from '../../helpers/debounce';
import {
    useCallback,
    useEffect,
} from 'react';
import { useUser } from '../../hook/useUser';
import { Colors } from '@/src/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

export const detailsMovieCardHeight = 216;
export const screenHeight = Dimensions.get('window').height;

export default function Details(props: DetailsProps) {

    const { } = props;

    const { movieId } = useLocalSearchParams<DetailsLocalSearchParams>();

    const loggedInUserAvatar = useUser((state) => state.avatar);

    useFocusEffect(
        useCallback(() => {
            setCurrentMovieId(movieId);
            return () => {

            };
        }, [movieId])
    );

    const {
        title,
        time,
        date,
        description,
        averageColor,
        comments,
        genre,
        thumbnail,
    } = getMovieById(movieId);

    useEffect(() => {
        setCurrentMovieId(movieId);
    }, [movieId]);

    const { debounce } = useDebounce(1000);

    const similarContentMovies = getMoviesByGenre(genre[0]);

    const route = useRouter();

    const lineageGradientHeight = detailsMovieCardHeight * 2;

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View
                style={styles.movieMainCardContainer}
            >
                <Image
                    style={[styles.movieMainCard, {
                        height: detailsMovieCardHeight,
                    }]}
                    src={thumbnail}
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

            {/*  <Button
                title='Assistir'
                type='primary'
                variant='filled'
                borderRadius='medium'
                leftIcon={
                    <Icon
                        name='Ionicons'
                        icon='play-sharp'
                        size='small'
                    />
                }
            /> */}

            <ScrollView
                contentContainerStyle={styles.contentContainerStyle}
            >
                <View
                    style={styles.container}
                >
                    <MovieTitle
                        title={title}
                        withDetails
                        time={time}
                        date={date}
                    />

                    <Plot
                        description={description}
                        buttonTitle='Mais'
                        withButton
                        withTitle={false}
                        fnButton={() => debounce(() => route.push(`/(details)/(more)?movieId=${movieId}`))}
                    />

                    <ActionButtons
                        id={movieId}
                    />

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => debounce(() => route.push(`/(details)/(comments)/comment?movieId=${movieId}`))}
                    >
                        <CommentActionRow
                            avatarOptions={{
                                mode: 'image',
                                imageUrl: loggedInUserAvatar,
                            }}
                            count={comments.length}
                            title='Comentários'
                            addCommentOptions={{
                                text: 'Adicione um comentário...',
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <MovieCardCarousel
                    movies={similarContentMovies}
                    category='Conteúdos similares'
                    buttonTitle='Ver mais'
                />
            </ScrollView>

            <LinearGradient
                style={{
                    position: 'absolute',
                    width: '100%',
                    zIndex: -1,
                    opacity: 0.6,
                    height: lineageGradientHeight,
                }}
                colors={[averageColor, Colors.surface.main]}
            />
        </SafeAreaView >
    );
}