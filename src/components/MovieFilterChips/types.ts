import { OrderOptions } from "@/src/helpers/extractMovieFilters";
import { ChipProps } from "../Chip/types";

export type MovieFilterChipsProps = {
    filterOptions: string[];
    chipOptions?: ChipProps;
    filterCategoryIndex: number;
    setActor: (value: string) => void;
    setGenre: (value: string) => void;
    setYear: (value: string) => void;
    setOrder: (value: OrderOptions) => void;
    onFilterChipPressed?: () => void;
};