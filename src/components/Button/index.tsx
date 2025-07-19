import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from "react-native";
import { styles } from "./styles";
import { ButtonProps } from "./types";
import { getButtonToken } from "@/src/helpers/getButtonToken";
import { Colors } from "@/src/constants/Colors";
import React from "react";
import { IconProps } from "../Icon/types";
import { ActivityIndicator } from "../ActivityIndicator";

export function Button(props: ButtonProps & Omit<TouchableOpacityProps, 'style'>) {

    const {
        title,
        leftIcon,
        rightIcon,
        disabled,
        size = 'medium',
        isLoading = false,
    } = props;

    const token = getButtonToken(props);

    const background = StyleSheet.flatten(token.background);
    const border = StyleSheet.flatten(token.border);
    const text = StyleSheet.flatten(token.text);

    const backgroundColor = disabled ? Colors.disabled.background : background.backgroundColor;
    const color = disabled ? Colors.disabled.text : text.color;

    const Size = size === 'medium' ? 'small' : 'extraSmall';

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            {...props}
            style={[{
                ...background,
                backgroundColor,
                ...border,
            }, styles.button]}
        >
            <View
                style={[{
                    opacity: isLoading ? 0 : 1,
                    gap: background['gap'],
                }, styles.button]}
            >
                {leftIcon && React.cloneElement(leftIcon, {
                    color,
                    size: Size,
                } as IconProps)}

                {title && <Text
                    style={[{
                        ...text,
                        color,
                    }, styles.title]}
                >
                    {title}
                </Text>}

                {rightIcon && React.cloneElement(rightIcon, {
                    color,
                    size: Size,
                } as IconProps)}
            </View>
            <View
                style={{
                    position: 'absolute',
                    opacity: isLoading ? 1 : 0,
                }}
            >
                <ActivityIndicator
                    COLOR="second"
                    SIZE="small"
                />
            </View>
        </TouchableOpacity>
    );
}