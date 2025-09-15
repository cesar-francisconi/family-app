import { useMemo } from "react";
import {
    AvatarNoImage,
    AvatarWithImage,
} from "../components/Avatar/types";
import { User } from "./useUser";

interface UseAvatarOptionsProps {
    avatar: User['avatar'];
    username: User['username'];
};

export function useAvatarOptions({ avatar, username }: UseAvatarOptionsProps) {
    const withImagem: AvatarWithImage = useMemo(() => ({
        mode: 'image',
        imageUrl: avatar as string,
    }), [avatar]);

    const noImage: AvatarNoImage = useMemo(() => ({
        mode: 'initial',
        initial: username,
    }), [username]);

    return {
        withImagem,
        noImage,
    };
};