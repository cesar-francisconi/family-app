import { Movie } from "@/movie";

export type MovieListItemGroupProps = {
    data: Movie[];
    withTitle?: boolean;
    title?: string;
};