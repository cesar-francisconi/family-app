import { ChipsCarouselProps } from "../ChipsCarousel/types";

export type ChipsCarouselGroupProps = {
    title?: string;
    showTitle?: boolean;
    chips: ChipsCarouselProps['chips'][];
    chipBorderRadius?: ChipsCarouselProps['chipBorderRadius'];
};