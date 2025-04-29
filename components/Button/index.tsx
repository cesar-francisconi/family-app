import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";
import { ButtonProps } from "./types";
import { getButtonToken } from "@/helpers/getButtonToken";
import { Colors } from "@/constants/Colors";
import React from "react";

export function Button(props: ButtonProps & Omit<TouchableOpacityProps, 'style'>) {

    const { title, leftIcon, rightIcon, disabled } = props;

    const token = getButtonToken(props);

    const background = StyleSheet.flatten(token.background);
    const border = StyleSheet.flatten(token.border);
    const text = StyleSheet.flatten(token.text);

    const backgroundColorButton = disabled ? Colors.disabled.background : background.backgroundColor;
    const textColor = disabled ? Colors.disabled.text : text.color;

    return (
        <TouchableOpacity
            {...props}
            style={[{
                ...background,
                backgroundColor: backgroundColorButton,
                ...border,
            }, styles.button]}
        >
            {leftIcon && React.cloneElement(leftIcon, { color: textColor, size: 'small' })}

            <Text
                style={[{
                    ...text,
                    color: textColor,
                }, styles.title]}
            >
                {title}
            </Text>

            {rightIcon && React.cloneElement(rightIcon, { color: textColor, size: 'small' })}
        </TouchableOpacity>
    );
}