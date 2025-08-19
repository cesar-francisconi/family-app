import { ActivityIndicatorProps } from "../components/ActivityIndicator/types";

export function getActivityIndicatorSize(size: Exclude<ActivityIndicatorProps['size'], undefined>): number {
    const sizeMap = {
        large: 40,
        medium: 32,
        small: 24,
    };

    return sizeMap[size];
};