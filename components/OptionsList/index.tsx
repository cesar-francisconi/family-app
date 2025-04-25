import {
    StyleProp,
    View,
    ViewStyle,
} from 'react-native';
import { OptionsListProps } from './types';
import React from 'react';
import { styles } from './styles';
import { Colors } from '@/constants/Colors';

export function OptionsList(props: OptionsListProps) {

    const { options, showStroke } = props;

    const optionsListBorder: StyleProp<ViewStyle> = showStroke ? {
        borderWidth: 1,
        borderColor: Colors.outline.main,
    } : {
        borderWidth: undefined,
        borderColor: undefined,
    };

    return (
        <View
            style={[styles.container, optionsListBorder]}
        >
            {options.map((option, index) => {
                return React.cloneElement(option, { key: index });
            })}
        </View>
    );
}

