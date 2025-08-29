import { ChipProps } from "../components/Chip/types";
import { Colors } from "../constants/Colors";

export function resolveChipBackgroundColor(isActive: ChipProps['isActive']) {
    return isActive ? Colors.surface.containerHigh : undefined;
};