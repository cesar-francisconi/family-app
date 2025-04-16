import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";
import { ButtonProps } from "./types";
import { getButtonToken } from "@/helpers/buttonHelper";
import { Colors } from "@/constants/Colors";

export function Button(props: ButtonProps & TouchableOpacityProps) {

    const { title, iconLeft, iconRight, disabled } = props;

    const token = getButtonToken(props);

    const background = StyleSheet.flatten(token.background);
    const border = StyleSheet.flatten(token.border);
    const text = StyleSheet.flatten(token.text);

    return (
        <TouchableOpacity
            style={[{
                ...background,
                backgroundColor: disabled ? Colors.disabled.background : background.backgroundColor,
                ...border,
            }, styles.button]}
            {...props}
        >
            {iconLeft}
            <Text
                style={[{
                    ...text,
                    color: disabled ? Colors.disabled.text : text.color,
                }, styles.title]}
            >
                {title}
            </Text>
            {iconRight}
        </TouchableOpacity>
    );
}