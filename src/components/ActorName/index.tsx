import {
    Text,
    View,
} from 'react-native';
import { ActorNameProps } from './types';
import { styles } from './styles';

export function ActorName(props: ActorNameProps) {

    const {
        name,
        bgTransparent = true,
    } = props;

    const opacity = bgTransparent ? 0.8 : 1;

    return (
        <View
            style={styles.container}
        >
            <View
                style={[styles.background, {
                    opacity,
                }]}
            />

            <Text
                style={styles.text}
                numberOfLines={1}
            >
                {name}
            </Text>
        </View>
    );
}