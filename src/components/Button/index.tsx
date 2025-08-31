import React, {
    useMemo
} from "react";
import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { styles } from "./styles";
import { getButtonToken } from "@/src/helpers/getButtonToken";
import { IconProps } from "../Icon/types";
import { ActivityIndicator } from "../ActivityIndicator";
import { getButtonBackgroundColor } from "@/src/helpers/getButtonBackgroundColor";
import { getButtonTextColor } from "@/src/helpers/getButtonTextColor";
import { getButtonIconSize } from "@/src/helpers/getButtonIconSize";
import { extractButtonStyle } from "@/src/helpers/extractButtonStyle";
import { ActionDefaultOpacity } from "@/src/constants/Opacity";
import { ButtonPropsExtended } from "./types";

export const Button = React.memo((props: ButtonPropsExtended) => {

    const {
        title,
        leftIcon,
        rightIcon,
        disabled,
        size = 'medium',
        isLoading = false,
    } = props;

    const token = useMemo(() => getButtonToken({
        type: props.type,
        variant: props.variant,
        size: props.size,
        borderRadius: props.borderRadius,
    }), [props.type, props.variant, props.size, props.borderRadius]);

    const { background, border, text } = extractButtonStyle(token);

    const backgroundColor = getButtonBackgroundColor(disabled, background);;
    const textColor = getButtonTextColor(disabled, text);
    const iconSize = getButtonIconSize(size);

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
