import { MovieCardProps } from "../MovieCard/types";
import { MovieCardCarouselProps } from "../MovieCardCarousel/types";

export type MovieCardCarouselGroupProps = {
    showMovieCardTitle?: MovieCardProps['showTitle'];
    movieCardCarouselButtonTitle?: MovieCardCarouselProps['buttonTitle'];
    movieCardCarousels: {
        id: string;
        category: string;
        movieCards: MovieCardProps[];
    }[];
};