import { Movie } from '@/movie';
import { formatArrayToString } from './formatArraytoString';
import { formatDate } from './formatDate';
import { formatDuration } from './formatDuration';

export function getMovieInfos(movie: Movie) {
    return [
        {
            id: '01',
            prop: 'Categoria',
            propValue: movie.category,
        },
        {
            id: '02',
            prop: 'Diretor',
            propValue: movie.director,
        },
        {
            id: '03',
            prop: 'Tempo',
            propValue: formatDuration(movie.time),
        },
        {
            id: '04',
            prop: 'Lançamento',
            propValue: formatDate(movie.date),
        },
        {
            id: '05',
            prop: 'Gênero',
            propValue: formatArrayToString(movie.genre),
        },
        {
            id: '06',
            prop: 'Elenco',
            propValue: formatArrayToString(movie.cast.map((actor: any) => actor.name)),
        },
    ];
}
