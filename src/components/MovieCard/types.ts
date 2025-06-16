import { Movie } from "@/movie";

export type MovieCardPropsDefault = {
    withTitle?: boolean;
    borderRadius?: 'none' | 'small' | 'medium' | 'large',
    withMore?: boolean;
};

export type MovieCardProps = Movie & MovieCardPropsDefault;