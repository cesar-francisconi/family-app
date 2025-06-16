import {
    getAllMovies,
    getMoviesByGenre,
} from "@/src/hook/useMovie";
import {
    CategoryParam,
} from "@/movie";

export function getMoviesForMovieCardCarouselGroup(category: CategoryParam[]) {

    const uniqueCategories = new Set(category);

    if (uniqueCategories.size !== category.length) {
        throw new Error('Categorias duplicadas não são permitidas.');
    }

    return [...uniqueCategories].map((category, index) => ({
        id: `0${index + 1}`,
        category: category,
        movies: category === 'Todos' ? getAllMovies() : getMoviesByGenre(category.toLowerCase()),
    }));
}