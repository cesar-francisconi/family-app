import {
    getAllMovies,
    getMoviesByGenre,
} from '@/src/hook/useMovie';
import { getActorMoviesById } from './getActorMoviesById';
import { CategoryParam, MovieGenreType } from '@/movie';

export function getMoviesByCategory(category: CategoryParam, genre: MovieGenreType, actorId: string) {
    if (category === 'Todos') {
        return getAllMovies();
    }

    if (category === 'Filmes com' && actorId) {
        return getActorMoviesById(actorId);
    }

    if (genre) {
        return getMoviesByGenre(genre);
    }

    return [];
}