import React from "react";
import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { styles } from "./styles";
import { IconProps } from "../Icon/types";
import { ActivityIndicator } from "../ActivityIndicator";
import { ActionDefaultOpacity } from "@/src/constants/Opacity";
import { ButtonPropsExtended } from "./types";
import { useButtonStyles } from "@/src/hook/useButtonStyles";

export const Button = React.memo((props: ButtonPropsExtended) => {

    const {
        title,
        leftIcon,
        rightIcon,
        isLoading = false,
    } = props;

    const { background, border, text, backgroundColor, textColor, iconSize } =
        useButtonStyles(props);

    return (
        <TouchableOpacity
            activeOpacity={ActionDefaultOpacity}
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
                    color: textColor,
                    size: iconSize,
                } as IconProps)}

                {title && <Text
                    style={[{
                        ...text,
                        color: textColor,
                    }, styles.title]}
                >
                    {title}
                </Text>}

                {rightIcon && React.cloneElement(rightIcon, {
                    color: textColor,
                    size: iconSize,
                } as IconProps)}
            </View>
            <View
                style={{
                    position: 'absolute',
                    opacity: isLoading ? 1 : 0,
                }}
            >
                <ActivityIndicator
                    color={"second"}
                    size={"small"}
                />
            </View>
        </TouchableOpacity>
    );
});
