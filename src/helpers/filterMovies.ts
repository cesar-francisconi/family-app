import { create } from 'zustand';
import { MOVIES } from '@/movie';
import { getAllMovies } from '../hook/useMovie';

interface FilterMoviesState {
    actor: string;
    genre: string;
    year: string;
    order: 'Popularidade' | 'Mais recentes';
};

const initialState = {
    data: MOVIES,
};

export const useFilterMovies = create(() => initialState);

export const filterMovies = ({ actor, genre, year, order }: FilterMoviesState) => useFilterMovies.setState(() => {
    let filtered = getAllMovies();

    if (actor !== 'Tudo') {
        filtered = filtered.filter((movie) =>
            movie.cast.some((act) => act.name === actor)
        );
    };

    if (genre !== 'Tudo') {
        filtered = filtered.filter((movie) =>
            movie.genre.includes(genre)
        );
    };

    if (year !== 'Tudo') {
        filtered = filtered.filter((movie) =>
            movie.date.startsWith(year)
        );
    };

    if (order === 'Popularidade') {
        filtered = filtered.sort((a, b) => b.like - a.like);
    } else if (order === 'Mais recentes') {
        filtered = filtered.sort(
            (a, b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    };

    return {
        data: filtered,
    };
}); 
