import { getAllMovies } from "../hook/useMovie";

export type ActorsOptions = string;
export type GenresOptions = string;
export type YearsOptions = string;
export type OrderOptions = 'Popularidade' | 'Mais recentes';

export type Filters = [
    ActorsOptions[],
    GenresOptions[],
    YearsOptions[],
    OrderOptions[],
];

export const extractMovieFilters = async (): Promise<Filters | null> => {
    const movies = await getAllMovies();

    if (!movies) return null;

    const actors = new Set<ActorsOptions>();
    const genres = new Set<GenresOptions>();
    const years = new Set<YearsOptions>();

    for (const movie of movies) {
        const year = movie.date.slice(0, 4);
        years.add(year);

        for (const actor of movie.cast) {
            actors.add(actor.name);
        }

        for (const genre of movie.genre) {
            genres.add(genre.toLowerCase());
        }
    };

    return [
        ['Tudo', ...Array.from(actors).sort()],
        ['Tudo', ...Array.from(genres).sort()],
        ['Tudo', ...Array.from(years).sort((a, b) => Number(b) - Number(a))],
        ['Popularidade', 'Mais recentes'],
    ];
};
