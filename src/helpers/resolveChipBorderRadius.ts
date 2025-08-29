import { ChipProps } from "../components/Chip/types";
import { BorderRadius } from "../constants/BorderRadius";

export function resolveChipBorderRadius(borderRadius: Exclude<ChipProps['borderRadius'], undefined>) {
    const borderRadiusMap = {
        large: BorderRadius['md'],
        medium: BorderRadius['sm'],
        small: BorderRadius['xs'],
        none: BorderRadius['none'],
    };

    return borderRadiusMap[borderRadius];
};