
import { getAllMovies } from "@/src/hook/useMovie";

export function getActorById(actorId: string) {
    const movies = getAllMovies();

    for (const movie of movies) {
        const actor = movie.cast.find((actor) => actor.id === actorId);

        if (actor) {
            return actor;
        }
    }

    return undefined; // se não encontrar nenhum ator
}