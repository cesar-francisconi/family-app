import { DefaultAvatar } from "../components/Avatar/types";

export function getAvatarDimension(size: Exclude<DefaultAvatar['size'], undefined>) {
    const sizeMap = {
        large: 48,
        medium: 32,
        small: 26,
    };

    return sizeMap[size];
};