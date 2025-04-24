import { MovieCardProps } from "@/components/MovieCard/types";

export function chunkArray(array: MovieCardProps[], size: number): MovieCardProps[][] {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
        array.slice(i * size, i * size + size)
    );
}