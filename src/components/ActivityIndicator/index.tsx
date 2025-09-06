import React from 'react';
import {
    ActivityIndicator as AIndicator,
    View,
} from 'react-native';
import { ActivityIndicatorProps } from './types';
import { styles } from './styles';
import { resolveActivityIndicatorStyle } from '@/src/helpers/resolveActivityIndicatorStyle';

export const ActivityIndicator = React.memo((props: ActivityIndicatorProps) => {

    const {
        color = 'primary',
        size = 'large',
    } = props;

    const indicatorStyle = resolveActivityIndicatorStyle(color, size);

    return (
        <View style={styles.container}>
            <AIndicator color={indicatorStyle.color} size={indicatorStyle.size} />
        </View>
    );
});

