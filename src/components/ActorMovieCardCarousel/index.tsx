import React from 'react';
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { MovieCard } from '../MovieCard';
import { styles } from './styles';
import {
    ActorMovieCardCarouselProps,
} from './types';
import { maxVisibleMovies } from '@/src/constants/DefautConfig';
import { useActorMovieCardCarouselNavigation } from '@/src/hook/useActorMovieCardCarouselNavigation';

export const ActorMovieCardCarousel = React.memo((props: ActorMovieCardCarouselProps) => {

    const {
        title,
        actorId,
        movies,
        movieCardOptions,
    } = props;

    const { handleMovieCardPress } = useActorMovieCardCarouselNavigation(actorId, title);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>

            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                horizontal
                data={movies.slice(0, maxVisibleMovies)}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {

                    const lastMaxVisibleMovies = index === (maxVisibleMovies - 1);
                    const withMore = lastMaxVisibleMovies;

                    return (
                        <TouchableOpacity
                            onPress={() => handleMovieCardPress(lastMaxVisibleMovies, item.id)}
                        >
                            <MovieCard
                                withMore={withMore}
                                {...movieCardOptions}
                                {...item}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
});
