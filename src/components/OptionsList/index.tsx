import {
    View,
} from 'react-native';
import { OptionsListProps } from './types';
import React from 'react';
import { styles } from './styles';
import { Colors } from '@/src/constants/Colors';
import { Spacing } from '@/src/constants/Spacing';

export function OptionsList(props: OptionsListProps) {

    const {
        options,
        withStroke,
        isBackground
    } = props;

    const borderWidth = withStroke ? 1 : undefined;
    const backgroundColor = isBackground ? Colors.surface.containerExtraHigh : undefined;
    const paddingHorizontal = isBackground ? Spacing['2xl'] : Spacing['none'];

    return (
        <View
            style={[styles.container, {
                backgroundColor,
                paddingHorizontal,
                borderWidth,
            }]}
        >
            {options.map((option, index) => {
                return React.cloneElement(option, { key: index });
            })}
        </View>
    );
}

