import {
    FlatList,
    View,
} from 'react-native';
import { MovieCardCarouselGroupProps } from './types';
import { styles } from './styles';
import { MovieCardCarousel } from '../MovieCardCarousel/Index';

export function MovieCardCarouselGroup(props: MovieCardCarouselGroupProps) {

    const { movieCardCarousels } = props;

    return (
        <View style={styles.mainContainer}>
            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={movieCardCarousels}
                renderItem={({ item }) => {
                    return (
                        <MovieCardCarousel
                            {...item}
                            buttonTitle='Ver mais'
                        />
                    );
                }}
            />
        </View>
    );
}

