import { useEffect } from 'react';
import {
    filterMovies,
    FilterMoviesState,
} from '@/src/hook/useMovie';


export function useFilterMovies({ actor, genre, year, order }: FilterMoviesState) {
    useEffect(() => {
        filterMovies({ actor, genre, year, order });
    }, [actor, genre, year, order]);
}
