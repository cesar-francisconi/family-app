import {
    ActivityIndicator as AIndicator,
    View,
} from 'react-native';
import { ActivityIndicatorProps } from './types';
import { styles } from './styles';
import { Colors } from '@/src/constants/Colors';

export function ActivityIndicator(props: ActivityIndicatorProps) {

    const {
        COLOR = 'primary',
        SIZE = 'large',
    } = props;

    const colorMap = {
        primary: Colors.primary.main,
        second: Colors.link,
    };

    const sizeMap = {
        large: 40,
        medium: 32,
        small: 24,
    };

    const color = colorMap[COLOR];
    const size = sizeMap[SIZE];

    return (
        <View style={styles.container}>
            <AIndicator color={color} size={size} />
        </View>
    );
}

