import { QuartiaryOption } from "@/src/helpers/extractChips";
import { ChipProps } from "../Chip/types";

export type ChipsCarouselProps = {
    chips: string[];
    chipOptions?: ChipProps;
    chipsCarouselIndex: number;
    setActor: (value: string) => void;
    setGenre: (value: string) => void;
    setYear: (value: string) => void;
    setOrder: (value: QuartiaryOption) => void;
};