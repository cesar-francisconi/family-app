import { Comment } from "@/movie";

export type UserCommentPropsDefault = {
    answersText?: string;
    withAnswersText?: boolean;
};

export type UserCommentProps = Comment & UserCommentPropsDefault;