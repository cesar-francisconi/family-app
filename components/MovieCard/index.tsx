import {
    Image,
    Text,
    View,
} from 'react-native';
import { MovieCardProps } from './types';
import { styles } from './styles';
import { BorderRadius } from '@/constants/BorderRadius';

export function MovieCard(props: MovieCardProps) {

    const {
        title = 'Title',
        showTitle = false,
        imageUrl,
        borderRadius = 'medium',
    } = props;

    const borderRadiusMap = {
        none: BorderRadius.none,
        large: BorderRadius.md,
        medium: BorderRadius.sm,
        small: BorderRadius.xs,
    } as const;

    const movieCardBorderRadius = borderRadiusMap[borderRadius];

    return (
        <View style={styles.container}>
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

