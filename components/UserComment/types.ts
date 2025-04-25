export type UserCommentProps = {
    id: string;
    username: string;
    userImageUrl: string | null;
    comment: string;
    time: number;
    answersNumber: number;
    answersText?: string;
};