import { Comment } from "@/movie";

export type UserCommentPropsDefault = {
    answersText?: string;
    withAnswersText?: boolean;
    onMorePress: (item: Comment) => void;
    handleAnswersPress?: (item: Comment) => void;
};

export type UserCommentProps = Comment & UserCommentPropsDefault;