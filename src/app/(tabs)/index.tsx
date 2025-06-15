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
import { getMostRecentMovies } from '@/src/helpers/getMostRecentMoviesgetMostRecentMovies';
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
export default function Home(props: HomeProps) {

    const { } = props;

    const route = useRouter();

    const { debounce } = useDebounce();

    const movieCards = getMostRecentMovies(4);

    const flatListRef = useRef<FlatList>(null);

    const [movieCardCurrentIndex, setMovieCardCurrentIndex] = useState(3);

    useEffect(() => {
        const dayIndex = (new Date().getDate() - 1) % movieCards.length;

        setMovieCardCurrentIndex(dayIndex);

        setTimeout(() => {
            flatListRef.current?.scrollToIndex({
                index: dayIndex,
                animated: false,
            });
        }, 0);
    }, [movieCards.length]);

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

    const currentMovieCardAverageColor = movieCards[movieCardCurrentIndex].averageColor;

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
                        data={movieCards}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => debounce(() => route.push(`/(details)?movieId=${item.id}`))}
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