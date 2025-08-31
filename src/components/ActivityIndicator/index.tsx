import React from 'react';
import {
    ActivityIndicator as AIndicator,
    View,
} from 'react-native';
import { ActivityIndicatorProps } from './types';
import { styles } from './styles';
import { getActivityIndicatorColor } from '@/src/helpers/getActivityIndicatorColor';
import { getActivityIndicatorSize } from '@/src/helpers/getActivityIndicatorSize';

export const ActivityIndicator = React.memo((props: ActivityIndicatorProps) => {

    const {
        color = 'primary',
        size = 'large',
    } = props;

    const indicatorColor = getActivityIndicatorColor(color);
    const indicatorSize = getActivityIndicatorSize(size);

    return (
        <View style={styles.container}>
            <AIndicator color={indicatorColor} size={indicatorSize} />
        </View>
    );
});

