import { MovieCardProps } from "../MovieCard/types";

export type MovieCardCarouselProps = {
    category?: string;
    showTitle?: boolean;
    buttonTitle?: string;
    movieCards: MovieCardProps[];
    showMovieCardTitle?: boolean;
};