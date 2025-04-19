import { MovieCardProps } from "../MovieCard/types";
import { MovieCardCarouselProps } from "../MovieCardCarousel/types";

export type MovieCardCarouselGroupProps = {
    movieCardCarousels: {
        id: string;
        category: string;
        movieCards: MovieCardProps[];
    }[];
};