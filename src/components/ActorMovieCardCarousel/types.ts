import { CastMember, TitleParam } from "@/movie";
import {
    MovieCardProps,
    MovieCardPropsDefault,
} from "../MovieCard/types";

export type ActorMovieCardCarouselGlobalSearchParams = {

};

export type ActorMovieCardCarouselProps = {
    title: TitleParam;
    actorId: CastMember['id'];
    movies: MovieCardProps[];
    movieCardOptions?: Pick<MovieCardPropsDefault, 'withTitle'>,
};