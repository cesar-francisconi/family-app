import {
    ActivityIndicator as AIndicator,
    View,
} from 'react-native';
import { ActivityIndicatorProps } from './types';
import { styles } from './styles';
import { Colors } from '@/src/constants/Colors';

export function ActivityIndicator(props: ActivityIndicatorProps) {

    const {

    } = props;

    return (
        <View style={styles.container}>
            <AIndicator color={Colors.primary.main} size={40} />
        </View>
    );
}

