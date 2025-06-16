import {
    View,
} from 'react-native';
import { styles } from './styles';
import { VerticalButtonGroupProps } from './types';
import React from 'react';

export function VerticalButtonGroup(props: VerticalButtonGroupProps) {

    const { firstButton, secondButton } = props;

    return (
        <View style={styles.container}>
            {React.cloneElement(firstButton, { borderRadius: 'medium' })}

            {React.cloneElement(secondButton, { borderRadius: 'medium' })}
        </View>
    );
}

