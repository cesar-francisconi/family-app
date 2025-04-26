import {
    Text,
    TextInput,
    TextInputProps,
    View,
} from 'react-native';
import { styles } from './styles';
import { SearchProps } from './types';
import React from 'react';
import { Colors } from '@/constants/Colors';

export function Search(props: SearchProps & TextInputProps) {

    const { leftIcon, rightIcon, filled = false, iconSize = 'small' } = props;

    return (
        <View style={styles.container}>
            <View
                style={styles.leftIconAndInputContainer}
            >
                {React.cloneElement(leftIcon, { color: filled ? Colors.surface.on : Colors.surface.onVariant, size: iconSize })}

                <TextInput
                    placeholderTextColor={Colors.surface.onVariant}
                    style={styles.input}
                    {...props}
                />
            </View>

            {React.cloneElement(rightIcon, { color: filled ? Colors.surface.on : Colors.outline.main, size: iconSize })}
        </View>
    );
}

