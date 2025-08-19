import { MovieCardCarouselGroup } from '@/src/components/MovieCardCarouselGroup';
import { FeaturedMovieCardCarousel } from '@/src/components/FeaturedMovieCardCarousel';
import { styles } from '@/src/screen/Home/styles';
import { HomeProps } from '@/src/screen/Home/types';
import { LinearGradient } from 'expo-linear-gradient';
import {
    FlatList,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import {
    useEffect,
    useRef,
    useState,
} from 'react';
import { FeaturedMovieCard } from '@/src/components/FeaturedMovieCard';
import { Colors } from '@/src/constants/Colors';
import { useRouter } from 'expo-router';
import { useDebounce } from '@/src/helpers/debounce';
import Animated, {
    interpolateColor,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';
import { getScreenHeight } from '@/src/helpers/getScreenHeight';
import { Movie } from '@/movie';
import { ActivityIndicator } from '@/src/components/ActivityIndicator';
import {
    getAuth,
    onAuthStateChanged,
} from '@react-native-firebase/auth';
import { getMostRecentMovies } from '@/src/hook/useMovie';
import { setLoggedInUser } from '@/src/hook/useUser';

export default function Home(props: HomeProps) {

    const { } = props;

    const [movieCardCurrentIndex, setMovieCardCurrentIndex] = useState(0);
    const [mostRecentMovies, setMostRecentMovies] = useState<Movie[] | null>(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;

                setLoggedInUser();
            } else {
                route.replace('/(auth)/signIn');
            }
        });

        return () => unsubscribe();
    }, []);

    const route = useRouter();

    const { debounce } = useDebounce();

    useEffect(() => {
        (async () => {
            const mostRecentMovies = await getMostRecentMovies(4);

            setMostRecentMovies(mostRecentMovies);
        })()
    }, []);

    const flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        if (!mostRecentMovies) return;

        const dayIndex = (new Date().getDate() - 1) % mostRecentMovies.length;

        setMovieCardCurrentIndex(dayIndex);

        setTimeout(() => {
            flatListRef.current?.scrollToIndex({
                index: dayIndex,
                animated: false,
            });
        }, 0);
    }, []);

    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
    });

    const outputRangeHeader = getScreenHeight / 4;

    const animatedHeaderStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            scrollY.value,
            [0, outputRangeHeader],
            ['transparent', Colors.surface.transparentMain70]
        );

        return {
            backgroundColor,
        };
    });

    const outputRangeBackground = getScreenHeight / 2;

    const animatedBackgroundStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            scrollY.value,
            [0, outputRangeBackground],
            ['transparent', Colors.surface.main]
        );

        return {
            backgroundColor,
        };
    });

    if (!mostRecentMovies) return <ActivityIndicator />

    const currentMovieCardAverageColor = mostRecentMovies[movieCardCurrentIndex].averageColor;

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={[currentMovieCardAverageColor, Colors.surface.main]}
            >
                <Animated.ScrollView
                    contentContainerStyle={[styles.contentContainerStyle]}
                    style={animatedBackgroundStyle}
                    onScroll={scrollHandler}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                >
                    <FeaturedMovieCardCarousel
                        ref={flatListRef}
                        horizontal
                        scrollEnabled={false}
                        data={mostRecentMovies}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => debounce(() => route.push(`/(app)/(details)?movieId=${item.id}`), 1000)}
                            >
                                <FeaturedMovieCard {...item} />
                            </TouchableOpacity>
                        )}
                    />

                    <MovieCardCarouselGroup />
                </Animated.ScrollView>
            </LinearGradient>

            <Animated.View
                style={[styles.header,
                    animatedHeaderStyle,
                ]}
            />
        </SafeAreaView>
    );
}