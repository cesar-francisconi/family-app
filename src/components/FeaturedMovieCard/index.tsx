import {
    Dimensions,
    Image,
} from 'react-native';
import { styles } from './styles';
import { FeaturedMovieCardProps } from './types';
import { BorderRadius } from '@/src/constants/BorderRadius';
import Animated, {
    FadeInRight,
} from 'react-native-reanimated';

const screenWidth = Dimensions.get('window').width;

const sizeMap = {
    large: { width: 304 },
    medium: { width: 272 },
};

const borderRadiusMap = {
    large: BorderRadius.xl,
    medium: BorderRadius.md,
    small: BorderRadius.sm,
    none: BorderRadius.none,
};

export function FeaturedMovieCard(props: FeaturedMovieCardProps) {

    const {
        size = 'large',
        borderRadius = 'medium',
        withStroke = true,
        thumbnail,
    } = props;

    const radius = borderRadiusMap[borderRadius];
    const borderWidth = withStroke ? 1 : undefined;

    return (
        <Animated.View
            style={[styles.container, { width: screenWidth }]}
            entering={FadeInRight.duration(1500)}
        >
            <Image style={[styles.image,
            sizeMap[size],
            {
                borderRadius: radius,
                borderWidth,
            },
            ]} src={thumbnail} />

        </Animated.View>
    );
}
