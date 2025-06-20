import { AddCommentProps } from "../AddComment/types";
import { AvatarProps } from "../Avatar/types";

export type CommentProps = {
    avatarOptions: AvatarProps,
    addCommentOptions: AddCommentProps,
    withTitle?: boolean;
    title?: string;
    count?: number;
    borderRadius?: 'none' | 'small' | 'medium' | 'large';
    withStroke?: boolean;
};