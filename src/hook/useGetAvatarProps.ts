import { useMemo } from "react";
import { AvatarProps } from "../components/Avatar/types";
import { UserCommentProps } from "../components/Comment/types";
import { getInitialsFromUsername } from "../helpers/getInitialsFromUsername";

interface UseGetAvatarProps {
    avatar: UserCommentProps['avatar'];
    username: UserCommentProps['username'];
};

export function useGetAvatarProps({ avatar, username }: UseGetAvatarProps): AvatarProps {
    return useMemo((): AvatarProps =>
        avatar
            ? { mode: 'image', imageUrl: avatar, size: 'small' }
            : { mode: 'initial', initial: getInitialsFromUsername(username), size: 'small' }, [avatar, username]);
};