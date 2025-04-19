import { MovieCardProps } from "../MovieCard/types";
import { MovieCardCarouselProps } from "../MovieCardCarousel/types";

export type MovieCardCarouselGroupProps = {
    showMovieCardTitle?: boolean;
    movieCardCarouselButtonTitle?: string;
    movieCardCarousels: {
        id: string;
        category: string;
        movieCards: MovieCardProps[];
    }[];
};