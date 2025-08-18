import { CommentAnswer } from "@/movie";

export type AnswerProps = CommentAnswer & {
    answerUsernames: string[] | null;
    onMorePress: () => void;
};