import {
    FlatList,
    View,
} from 'react-native';
import { styles } from './styles';
import { MovieCardMainCarouselProps } from './types';
import { MovieCardMain } from '../MovieCardMain';
import { Dots } from '../Dots';

export function MovieCardMainCarousel(props: MovieCardMainCarouselProps) {

    const { movieCards } = props;

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                pagingEnabled
                data={movieCards}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return <MovieCardMain
                        {...item}
                    />;
                }}
            />

            <Dots
                selectedMovieCardIndex={0}
                length={movieCards.length}
            />
        </View>
    );
}

