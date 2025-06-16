import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from 'react-native';
import { styles } from './styles';
import { OptionProps } from './types';
import React from 'react';
import { IconProps } from '../Icon/types';

export function Option(props: OptionProps & Omit<TouchableOpacityProps, 'style'>) {

    const {
        text,
        leftIcon,
        rightIcon,
        withStroke = false,
    } = props;

    const borderBottomWidth = withStroke ? 0.4 : undefined;

    return (
        <View
            style={[styles.container, {
                borderBottomWidth,
            }]}
        >
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                {...props}
            >
                <View
                    style={styles.header}
                >
                    {leftIcon && React.cloneElement(leftIcon, { size: 'small' } as IconProps)}
                    <Text
                        style={styles.text}
                    >
                        {text}
                    </Text>
                </View>

                {rightIcon && React.cloneElement(rightIcon, { size: 'small' } as IconProps)}
            </TouchableOpacity>
        </View>
    );
}

