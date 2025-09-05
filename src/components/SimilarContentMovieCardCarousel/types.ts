import { TitleParam } from "@/movie";
import {
    MovieCardProps,
    MovieCardPropsDefault,
} from "../MovieCard/types";

export type SimilarContentMovieCardCarouselGlobalSearchParams = {
    
};

export type SimilarContentMovieCardCarouselProps = {
    title: TitleParam;
    movies: MovieCardProps[];
    movieCardOptions?: Pick<MovieCardPropsDefault, 'withTitle'>,
};