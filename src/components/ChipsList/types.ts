import { TextStyle } from "react-native";
import { ChipProps } from "../Chip/types";

export type ChipsListProps = {
    title?: string;
    withTitle?: boolean;
    data: string[];
    chipIsActive?: ChipProps['isActive'];
    chipBorderRadius?: ChipProps['borderRadius'];
    textTransform?: ChipProps['textTransform'];
    fnChip: (item: ChipProps['text']) => void;
};