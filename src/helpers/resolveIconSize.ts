import { IconProps } from "../components/Icon/types";

export function resolveIconSize(size: Exclude<IconProps['size'], undefined>) {
    const sizeMap = {
        extraLarge: 86,
        large: 38,
        medium: 24,
        small: 18,
        extraSmall: 14,
    };

    return sizeMap[size] ?? sizeMap['large'];
};