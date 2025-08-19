import {
    ActivityIndicator as AIndicator,
    View,
} from 'react-native';
import { ActivityIndicatorProps } from './types';
import { styles } from './styles';
import { getActivityIndicatorColor } from '@/src/helpers/getActivityIndicatorColor';
import { getActivityIndicatorSize } from '@/src/helpers/getActivityIndicatorSize';

export function ActivityIndicator(props: ActivityIndicatorProps) {

    const {
        color = 'primary',
        size = 'large',
    } = props;

    const COLOR = getActivityIndicatorColor(color);
    const SIZE = getActivityIndicatorSize(size);

    return (
        <View style={styles.container}>
            <AIndicator color={COLOR} size={SIZE} />
        </View>
    );
}

