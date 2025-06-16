import {
    Image,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewProps,
} from 'react-native';
import { MovieCardFlexProps } from './types';
import { styles } from './styles';
import { BorderRadius } from '@/src/constants/BorderRadius';

export function MovieCardFlex(props: MovieCardFlexProps & Pick<ViewProps, 'style'> & TouchableOpacityProps) {

    const {
        title = 'Title',
        withTitle = false,
        thumbnail,
        borderRadius = 'medium',
        style,
    } = props;

    const borderRadiusMap = {
        none: BorderRadius.none,
        large: BorderRadius.md,
        medium: BorderRadius.sm,
        small: BorderRadius.xs,
    };

    const radius = borderRadiusMap[borderRadius];

    return (
        <TouchableOpacity
            {...props}
            style={[styles.container, style]}
        >
            <Image
                style={[styles.image, {
                    borderRadius: radius,
                }]}
                src={thumbnail}
            />

            {withTitle && <Text
                style={styles.title}
                numberOfLines={1}
            >
                {title}
            </Text>}
        </TouchableOpacity>
    );
}

