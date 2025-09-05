import { DefaultAvatar } from "../components/Avatar/types";

export function resolveAvatarStyle(size: Exclude<DefaultAvatar['size'], undefined>, withStroke: Exclude<DefaultAvatar['withStroke'], undefined>) {
    const sizeMap = {
        large: 48,
        medium: 32,
        small: 26,
    };

    return {
        width: sizeMap[size],
        height: sizeMap[size],
        borderWidth: withStroke ? 1 : 0,
    };
};