export type AddCommentProps = {
    text?: string;
    borderRadius?: 'none' | 'small' | 'medium' | 'large';
    fnAddComment?: () => void;
};