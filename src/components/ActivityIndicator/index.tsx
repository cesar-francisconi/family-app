import {
    ActivityIndicator as AIndicator,
    View,
} from 'react-native';
import { ActivityIndicatorProps } from './types';
import { styles } from './styles';
import { Colors } from '@/src/constants/Colors';

export function ActivityIndicator(props: ActivityIndicatorProps) {

    const {
        color = 'primary',
        size = 'large',
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

    const COLOR = colorMap[color];
    const SIZE = sizeMap[size];

    return (
        <View style={styles.container}>
            <AIndicator color={COLOR} size={SIZE} />
        </View>
    );
}

