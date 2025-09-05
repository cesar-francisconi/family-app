import { ChipProps } from "../Chip/types";

export type SearchHistoryProps = {
    title?: string;
    withTitle?: boolean;
    searchHistory: ChipProps['text'][];
    chipOptions?: Omit<ChipProps, 'text' | 'fnChipPress'>;
    fnSearchHistoryChip: (item: ChipProps['text']) => void;
};