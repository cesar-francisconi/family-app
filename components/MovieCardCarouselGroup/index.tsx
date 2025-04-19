import {
    FlatList,
    View,
} from 'react-native';
import { MovieCardCarouselGroupProps } from './types';
import { styles } from './styles';
import { MovieCardCarousel } from '../MovieCardCarousel/Index';

export function MovieCardCarouselGroup(props: MovieCardCarouselGroupProps) {

    const { movieCardCarousels, showMovieCardTitle, movieCardCarouselButtonTitle } = props;

    const movieCardCarouselProps = {
        showMovieCardTitle,
        buttonTitle: movieCardCarouselButtonTitle,
    };

    return (
        <View style={styles.mainContainer}>
            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={movieCardCarousels}
                renderItem={({ item }) => {
                    return (
                        <MovieCardCarousel
                            {...item}
                            {...movieCardCarouselProps}
                        />
                    );
                }}
            />
        </View>
    );
}

