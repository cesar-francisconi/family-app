import { getAllMovies } from "@/src/hook/useMovie";

export function getMostRecentMovies(limit = 4) {
    const movies = getAllMovies();

    return movies
        .slice()
        .sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime())
        .slice(0, limit);
}