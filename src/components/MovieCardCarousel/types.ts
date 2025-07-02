import { CategoryParam } from "@/movie";
import {
    MovieCardProps,
    MovieCardPropsDefault,
} from "../MovieCard/types";

export type MovieCardCarouselGlobalSearchParams = {
    actorId: string;
    actorName: string;
};

export type MovieCardCarouselProps = {
    category: CategoryParam;
    movies: MovieCardProps[];
    movieCardOptions?: Pick<MovieCardPropsDefault, 'withTitle'>,
};