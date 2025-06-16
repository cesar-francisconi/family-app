import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MovieCardCarouselProps } from './types';
import { styles } from './styles';
import { MovieCard } from '../MovieCard';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Colors } from '@/src/constants/Colors';
import { getActorById } from '@/src/helpers/getActorById';
import { setCurrentMovieId } from '@/src/hook/useMovie';
import { useDebounce } from '@/src/helpers/debounce';
import { useRef } from 'react';

export function MovieCardCarousel(props: MovieCardCarouselProps) {

    const {
        category,
        actorId,
        buttonTitle = 'See more',
        movies,
        withMovieCardTitle = false,
    } = props;

    const { debounce } = useDebounce(1000);

    const router = useRouter();

    const actor = actorId ? getActorById(actorId)! : undefined;
    const genre = movies[0]?.genre[0];
    const maxVisibleMovies = 8;

    const handleSeeMorePress = () => {
        if (actor) {
            router.push(`/explorer?category=${category}&genre=${genre}&actorId=${actor.id}`);
        } else {
            router.push(`/explorer?category=${category}&genre=${genre}`);
        };
    };

    const handleMoviePress = (movieId: string) => {
        setCurrentMovieId(movieId);

        router.push(`/(details)?movieId=${movieId}`);
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>
                    {category} {actor && <Text>{actor.name}</Text>}
                </Text>

                {/*  <Button
                    type="primary"
                    size="medium"
                    variant="text"
                    title={buttonTitle}
                    rightIcon={
                        <Icon
                            name="Entypo"
                            icon="chevron-thin-right"
                            color={Colors.primary.main}
                            size="extraSmall"
                        />
                    }
                    onPress={() => debounce(handleSeeMorePress)}
                /> */}
            </View>

            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                horizontal
                data={movies.slice(0, maxVisibleMovies)}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {

                    const lastMaxVisibleMovies = index === maxVisibleMovies - 1;
                    const withMore = movies.length > 8 && lastMaxVisibleMovies;

                    return (
                        <TouchableOpacity activeOpacity={0.7} onPress={() => debounce(() => {
                            if (lastMaxVisibleMovies) {
                                handleSeeMorePress();
                            } else {
                                handleMoviePress(item.id);
                            };
                        })}>
                            <MovieCard {...item} withTitle={withMovieCardTitle} withMore={withMore} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}
