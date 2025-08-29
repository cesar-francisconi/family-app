import {
    useEffect,
    useState,
} from "react";
import {
    extractMovieFilters,
    Filters,
} from "@/src/helpers/extractMovieFilters";

export function useMovieFilters() {
    const [movieFilters, setMovieFilters] = useState<Filters | null>(null);

    useEffect(() => {
        (async () => {
            const filters = await extractMovieFilters();
            
            setMovieFilters(filters);
        })();
    }, []);

    return movieFilters;
}
