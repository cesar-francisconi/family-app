import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    useGlobalSearchParams,
    useRouter,
} from 'expo-router';
import {
    MovieCardCarouselGlobalSearchParams,
    MovieCardCarouselProps,
} from './types';
import { styles } from './styles';
import { MovieCard } from '../MovieCard';
import { setCurrentMovieId } from '@/src/hook/useMovie';
import { useDebounce } from '@/src/helpers/debounce';

export function MovieCardCarousel(props: MovieCardCarouselProps) {

    const {
        category,
        movies,
        movieCardOptions = { withTitle: true },
    } = props;

    const { debounce } = useDebounce();

    const router = useRouter();

    const rawParams = useGlobalSearchParams<MovieCardCarouselGlobalSearchParams>();

    const genre = movies[0]?.genre[0];
    const maxVisibleMovies = 8;

    const handleSeeMorePress = () => {
        if (rawParams.actorId) {
            router.push(`/explorer?category=${category}&genre=${genre}&actorId=${rawParams.actorId}`);
        } else {
            router.push(`/explorer?category=${category}&genre=${genre}`);
        };
    };

    const handleMoviePress = (movieId: string) => {
        setCurrentMovieId(movieId);

        router.push(`/(app)/(details)?movieId=${movieId}`);
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>
                    {category} {rawParams.actorName && <Text>{rawParams.actorName}</Text>}
                </Text>
            </View>

            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                horizontal
                data={movies.slice(0, maxVisibleMovies)}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {

                    const lastMaxVisibleMovies = index === maxVisibleMovies - 1;
                    const withMore = movies.length >= maxVisibleMovies && lastMaxVisibleMovies;

                    return (
                        <TouchableOpacity activeOpacity={0.7} onPress={() => debounce(() => {
                            if (lastMaxVisibleMovies) {
                                handleSeeMorePress();
                            } else {
                                handleMoviePress(item.id);
                            };
                        }, 1000)}>
                            <MovieCard {...item} withTitle={movieCardOptions.withTitle} withMore={withMore} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}
