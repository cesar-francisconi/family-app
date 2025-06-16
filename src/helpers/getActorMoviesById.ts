import { getAllMovies } from "@/src/hook/useMovie";

export function getActorMoviesById(actorId: string) {
    const movies = getAllMovies();

    const actorMovies = movies.filter((movie) => movie.cast.some((actor) => actorId === actor.id));

    return actorMovies;
};