import React from 'react';
import {
    View,
} from 'react-native';
import { OptionsListProps } from './types';
import { styles } from './styles';
import { resolveOptionsListStyle } from '@/src/helpers/resolveOptionsListStyle';

export function OptionsList(props: OptionsListProps) {

    const {
        options,
        withStroke,
        isBackground
    } = props;

    return (
        <View
            style={[styles.container, resolveOptionsListStyle({ withStroke, isBackground })]}
        >
            {options.map((option, index) => {
                return React.cloneElement(option, { key: index });
            })}
        </View>
    );
};

