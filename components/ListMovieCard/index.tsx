import {
    Image,
    Pressable,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { ListMovieCardProps } from './types';
import { BorderRadius } from '@/constants/BorderRadius';
import { Icon } from '../Icon';

export function ListMovieCard(props: ListMovieCardProps) {

    const { title,
        imageUrl,
        borderRadius = 'small',
        fnIcon = () => { },
        icon = <Icon
            name='MaterialIcons'
            icon='play-circle-outline'
            size='large'
        />,
    } = props;

    const borderRadiusMap = {
        none: BorderRadius.none,
        large: BorderRadius.xl,
        medium: BorderRadius.md,
        small: BorderRadius.sm,
    } as const;

    const MovieCardBorderRadius = borderRadiusMap[borderRadius];

    return (
        <View style={styles.mainContainer}>
            <View
                style={styles.container}
            >
                <Image
                    style={[styles.image, {
                        borderRadius: MovieCardBorderRadius,
                    }]}
                    src={imageUrl}
                />

                <Text
                    style={styles.title}
                    numberOfLines={2}
                >
                    {title}
                </Text>
            </View>

            <TouchableOpacity
                onPress={fnIcon}
            >
                {icon}
            </TouchableOpacity>
        </View>
    );
}

