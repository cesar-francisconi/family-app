import { ActivityIndicatorProps } from "../components/ActivityIndicator/types";
import { Colors } from "../constants/Colors";

export function resolveActivityIndicatorStyle(color: Exclude<ActivityIndicatorProps['color'], undefined>, size: Exclude<ActivityIndicatorProps['size'], undefined>) {
    const colorMap = {
        primary: Colors.primary.main,
        second: Colors.link,
    };

    const sizeMap = {
        large: 40,
        medium: 32,
        small: 24,
    };

    return {
        color: colorMap[color],
        size: sizeMap[size],
    };
};