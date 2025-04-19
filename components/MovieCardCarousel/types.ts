import { MovieCardProps } from "../MovieCard/types";

export type MovieCardCarouselProps = {
    category?: string;
    buttonTitle?: string;
    movieCards: MovieCardProps[];
    showMovieCardTitle?: boolean;
};