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
    SimilarContentMovieCardCarouselProps,
} from './types';
import { maxVisibleMovies } from '@/src/constants/defautConfig';
import { useSimilarContentNavigation } from '@/src/hook/useSimilarContentNavigation';

export const SimilarContentMovieCardCarousel = React.memo((props: SimilarContentMovieCardCarouselProps) => {

    const {
        title,
        movies,
        movieCardOptions,
    } = props;

    const { mainGenre } = movies[0];
    const { handleMovieCardPress } = useSimilarContentNavigation(mainGenre);

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
