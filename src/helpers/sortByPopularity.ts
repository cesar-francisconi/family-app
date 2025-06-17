import { Movie } from "@/movie";
import { getAllMovies } from "../hook/useMovie";

export function sortByPopularity(): Movie[] {
    const movies = getAllMovies();

    return [...movies].sort((a, b) => b.like - a.like);
}
