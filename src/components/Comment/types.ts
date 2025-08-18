import { Comment } from "@/movie";

export type UserCommentPropsDefault = {
    answersText?: string;
    withAnswersText?: boolean;
    onMorePress: () => void;
    handleAnswersPress?: () => void;
};

export type UserCommentProps = Comment & UserCommentPropsDefault;