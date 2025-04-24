import { addCommentProps, AvatarProps } from "../AddCommentWithAvatar/types";



export type CommentProps = AvatarProps & addCommentProps & {
    showComments?: boolean;
    commentTitle?: string;
    commentsNumbers?: number;
    borderRadius?: 'none' | 'small' | 'medium' | 'large';
    stroke?: boolean;
};