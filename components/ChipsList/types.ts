import { ChipProps } from "../Chip/types";

export type ChipsListProps = {
    title?: string;
    showTitle?: boolean;
    data: string[];
    chipActive?: ChipProps['active'],
    chipBorderRadius?: ChipProps['borderRadius'],
};