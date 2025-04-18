export type ListMovieCardProps = {
    id: string;
    title: string;
    imageUrl: string;
    borderRadius?: 'none' | 'small' | 'medium' | 'large';
    fnIcon?: () => void;
    icon?: JSX.Element;
};