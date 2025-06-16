import { Movie } from "@/movie";

export type FeaturedMovieCardPropsDefault = {
    size?: 'medium' | 'large';
    borderRadius?: 'none' | 'small' | 'medium' | 'large';
    withStroke?: boolean;
};

export type FeaturedMovieCardProps = Pick<Movie, 'id' | 'thumbnail'> & FeaturedMovieCardPropsDefault

