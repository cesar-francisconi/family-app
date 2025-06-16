import { CategoryParam } from "@/movie";
import { ButtonProps } from "../Button/types";
import { MovieCardProps } from "../MovieCard/types";

export type MovieCardCarouselProps = {
    category: CategoryParam;
    actorId?: string;
    buttonTitle?: ButtonProps['title'];
    movies: MovieCardProps[];
    withMovieCardTitle?: MovieCardProps['withTitle'];
};