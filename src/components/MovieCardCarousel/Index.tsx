import React from 'react';
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    MovieCardCarouselProps,
} from './types';
import { styles } from './styles';
import { MovieCard } from '../MovieCard';
import { maxVisibleMovies } from '@/src/constants/DefautConfig';
import { useMovieCardCarouselNavigation } from '@/src/hook/useMovieCardCarouselNavigation';

export const MovieCardCarousel = React.memo((props: MovieCardCarouselProps) => {

    const {
        title,
        movies,
        movieCardOptions,
    } = props;

    const { mainGenre } = movies[0];
    const { handleMovieCardPress } = useMovieCardCarouselNavigation(title, mainGenre);

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
