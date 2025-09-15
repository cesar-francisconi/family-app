import { AvatarProps } from "../components/Avatar/types";
import { LabelAvatarProps } from "../components/LabelAvatar/types";
import { getInitialsFromUsername } from "./getInitialsFromUsername";

interface ResolveAvatarProps {
    avatarOptions: AvatarProps;
    size: LabelAvatarProps['size'];
};

export function resolveAvatarProps({ avatarOptions, size }: ResolveAvatarProps) {
    let avatarProps: AvatarProps;

    if (avatarOptions.mode === 'image') {
        avatarProps = {
            mode: 'image',
            imageUrl: avatarOptions.imageUrl,
            size: size,
            withStroke: avatarOptions.withStroke,
        };
    } else {
        avatarProps = {
            mode: 'initial',
            initial: getInitialsFromUsername(avatarOptions.initial),
            size: size,
            withStroke: avatarOptions.withStroke,
        };
    };

    return avatarProps;
};