import {
    Image,
    Text,
    View,
    ViewProps,
} from 'react-native';
import { MovieCardFlexProps } from './types';
import { styles } from './styles';
import { BorderRadius } from '@/constants/BorderRadius';

export function MovieCardFlex(props: MovieCardFlexProps & Pick<ViewProps, 'style'>) {

    const {
        title = 'Title',
        showTitle = false,
        imageUrl,
        borderRadius = 'medium',
        style,
    } = props;

    const borderRadiusMap = {
        none: BorderRadius.none,
        large: BorderRadius.md,
        medium: BorderRadius.sm,
        small: BorderRadius.xs,
    } as const;

    const movieCardBorderRadius = borderRadiusMap[borderRadius];

    return (
        <View style={[styles.container, style]}>
            <Image
                style={[styles.image, {
                    borderRadius: movieCardBorderRadius,
                }]}
                src={imageUrl}
            />

            {showTitle && <Text
                style={styles.title}
                numberOfLines={1}
            >
                {title}
            </Text>}
        </View>
    );
}

