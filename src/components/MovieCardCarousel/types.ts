import { TitleParam } from "@/movie";
import {
    MovieCardProps,
    MovieCardPropsDefault,
} from "../MovieCard/types";

export type MovieCardCarouselGlobalSearchParams = {

};

export type MovieCardCarouselProps = {
    title: TitleParam;
    movies: MovieCardProps[];
    movieCardOptions?: Pick<MovieCardPropsDefault, 'withTitle'>,
};