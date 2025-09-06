import React from 'react';
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';
import { styles } from './styles';
import { ChipProps } from './types';
import { ActionDefaultOpacity } from '@/src/constants/Opacity';
import { resolveChipStyle } from '@/src/helpers/resolveChipStyle';

export const Chip = React.memo((props: ChipProps & Pick<TouchableOpacityProps, 'onLayout'>) => {

    const {
        text,
        isActive = true,
        borderRadius = 'none',
        textStyle,
        fnChipPress,
        onLayout,
    } = props;

    const { radius, backgroundColor, color } = resolveChipStyle({ isActive, borderRadius });

    return (
        <TouchableOpacity
            onPress={fnChipPress}
            activeOpacity={ActionDefaultOpacity}
            style={[styles.container, {
                borderRadius: radius,
                backgroundColor,
            }]}
            onLayout={onLayout}
        >
            <Text
                numberOfLines={1}
                style={[styles.text, {
                    color,
                }, textStyle]}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
});

