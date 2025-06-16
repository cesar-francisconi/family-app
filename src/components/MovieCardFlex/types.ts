import { Movie } from "@/movie";

export type MovieCardFlexPropsDefault = {
    withTitle?: boolean;
    borderRadius?: 'none' | 'small' | 'medium' | 'large',
};

export type MovieCardFlexProps = MovieCardFlexPropsDefault & Movie;