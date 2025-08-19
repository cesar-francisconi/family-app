import { ActivityIndicatorProps } from "../components/ActivityIndicator/types";
import { Colors } from "../constants/Colors";

export function getActivityIndicatorColor(color: Exclude<ActivityIndicatorProps['color'], undefined>): string {
    const colorMap = {
        primary: Colors.primary.main,
        second: Colors.link,
    };

    return colorMap[color];
};