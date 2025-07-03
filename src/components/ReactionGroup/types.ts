export type ReactionGroupProps = {
    commentId?: string;
    userId: string;
    likes: string[];
    dislikes: string[];
    withLikeCount?: boolean;
    username?: string;
    answerId?: string;
};