import { ChipProps } from "../components/Chip/types";
import { BorderRadius } from "../constants/BorderRadius";
import { Colors } from "../constants/Colors";

interface ResolveChipStyle {
    isActive: ChipProps['isActive'];
    borderRadius: Exclude<ChipProps['borderRadius'], undefined>;
};

export function resolveChipStyle({ isActive, borderRadius }: ResolveChipStyle) {

    const borderRadiusMap = {
        large: BorderRadius['md'],
        medium: BorderRadius['sm'],
        small: BorderRadius['xs'],
        none: BorderRadius['none'],
    };

    return {
        radius: borderRadiusMap[borderRadius],
        backgroundColor: isActive ? Colors.surface.containerHigh : undefined,
        color: isActive ? Colors.surface.on : Colors.surface.onVariant,
    }
};