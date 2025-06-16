import {
    Image,
    Text,
    View,
} from 'react-native';
import { MovieCardProps } from './types';
import { styles } from './styles';
import { BorderRadius } from '@/src/constants/BorderRadius';
import { Colors } from '@/src/constants/Colors';
import { Icon } from '../Icon';

export function MovieCard(props: MovieCardProps) {

    const {
        title = 'Title',
        withTitle = false,
        thumbnail,
        borderRadius = 'medium',
        withMore = false,
    } = props;

    const borderRadiusMap = {
        none: BorderRadius.none,
        large: BorderRadius.md,
        medium: BorderRadius.sm,
        small: BorderRadius.xs,
    };

    const radius = borderRadiusMap[borderRadius];

    return (
        <View style={styles.container}>
            {withMore ? <View
                style={[styles.moreContainer, {
                    borderRadius: radius,
                }]}
            >
                <Text
                    style={styles.moreText}
                >
                    Ver mais
                </Text>

                <Icon
                    name='Feather'
                    icon='eye'
                    color={Colors.primary.main}
                />
            </View>
                :
                <Image
                    style={[styles.image, {
                        borderRadius: radius,
                    }]}
                    src={thumbnail}
                />
            }

            {withTitle && !withMore && <Text
                style={styles.title}
                numberOfLines={1}
            >
                {title}
            </Text>}
        </View>
    );
}

