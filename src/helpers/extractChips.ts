import { MovieGenreType } from "@/movie";
import { getAllMovies } from "../hook/useMovie";

export type FirstOption = string;
export type SecondOption = string;
export type TertiaryOption = string;
export type QuartiaryOption = 'Popularidade' | 'Mais recentes';

export type Filters = [
    FirstOption[],
    SecondOption[],
    TertiaryOption[],
    QuartiaryOption[],
];

export function extractChips(): Filters {
    const movies = getAllMovies();

    const atores = new Set<FirstOption>();
    const generos = new Set<SecondOption>();
    const anos = new Set<TertiaryOption>();

    for (const movie of movies) {
        const ano = movie.date.slice(0, 4);
        anos.add(ano);

        for (const ator of movie.cast) {
            atores.add(ator.name);
        }

        for (const genero of movie.genre) {
            generos.add(genero.toLowerCase() as SecondOption);
        }
    }

    return [
        ['Tudo', ...Array.from(atores).sort()],
        ['Tudo', ...Array.from(generos).sort()],
        ['Tudo', ...Array.from(anos).sort((a, b) => Number(b) - Number(a))],
        ['Popularidade', 'Mais recentes'],
    ];
}

const quartiaryOptions: QuartiaryOption[] = ['Popularidade', 'Mais recentes'];

export function isQuartiaryOption(value: string): value is QuartiaryOption {
    return quartiaryOptions.includes(value as QuartiaryOption);
}
