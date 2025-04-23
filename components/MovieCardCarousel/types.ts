import { ButtonProps } from "../Button/types";
import { MovieCardProps } from "../MovieCard/types";

export type MovieCardCarouselProps = {
    category?: string;
    buttonTitle?: ButtonProps['title'];
    movieCards: MovieCardProps[];
    showMovieCardTitle?: MovieCardProps['showTitle'];
};