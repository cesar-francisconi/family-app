import { AddCommentProps } from "../AddComment/types";
import {
    AvatarProps,
} from "../Avatar/types";

export type AddCommentWithAvatarGlobalSearchParams = {
    movieId: string;
};

export type AddCommentWithAvatarProps = {
    avatarOptions: AvatarProps,
    addCommentOptions: AddCommentProps,
};