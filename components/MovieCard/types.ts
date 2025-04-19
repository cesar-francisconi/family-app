export type MovieCardProps = {
    id: string;
    title?: string;
    showTitle?: boolean;
    imageUrl: string;
    borderRadius?: 'none' | 'small' | 'medium' | 'large',
};