import React from 'react';
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';
import { styles } from './styles';
import { ChipProps } from './types';
import { ActionDefaultOpacity } from '@/src/constants/Opacity';
import { resolveChipBorderRadius } from '@/src/helpers/resolveChipBorderRadius';
import { resolveChipBackgroundColor } from '@/src/helpers/resolveChipBackgroundColor';
import { resolveChipTextColor } from '@/src/helpers/resolveChipTextColor';

export const Chip = React.memo((props: ChipProps & Pick<TouchableOpacityProps, 'onLayout'>) => {

    const {
        text,
        isActive = true,
        borderRadius = 'none',
        textStyle,
        fnChipPress,
        onLayout,
    } = props;

    const radius = resolveChipBorderRadius(borderRadius);
    const backgroundColor = resolveChipBackgroundColor(isActive);
    const color = resolveChipTextColor(isActive);

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

