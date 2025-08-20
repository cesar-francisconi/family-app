import { AddCommentProps } from "../AddComment/types";
import { AvatarProps } from "../Avatar/types";

export type CommentActionRowProps = {
    avatarOptions: AvatarProps,
    addCommentOptions: AddCommentProps,
    fnCommentActionRowPress?: () => void;
    withTitle?: boolean;
    title?: string;
    borderRadius?: 'none' | 'small' | 'medium' | 'large';
    withStroke?: boolean;
};