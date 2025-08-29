import { ChipProps } from "../components/Chip/types";
import { Colors } from "../constants/Colors";

export function resolveChipTextColor(isActive: ChipProps['isActive']) {
    return isActive ? Colors.surface.on : Colors.surface.onVariant;
};