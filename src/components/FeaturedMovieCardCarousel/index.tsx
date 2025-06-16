import {
    FlatList,
    FlatListProps,
    View,
} from 'react-native';
import { styles } from './styles';
import { FeaturedMovieCardCarouselProps } from './types';

import { forwardRef } from 'react';

export const FeaturedMovieCardCarousel = forwardRef<FlatList, FeaturedMovieCardCarouselProps>((props, ref) => {

    const {

    } = props;

    return (
        <View style={styles.container}>
            <FlatList
                ref={ref}
                {...props}
            />
        </View>
    );
});
