import { useMemo } from "react";
import { OptionsListProps } from "../components/OptionsList/types";
import { Colors } from "../constants/Colors";
import { Spacing } from "../constants/Spacing";

interface ResolveOptionsListStyleProps {
    withStroke: OptionsListProps['withStroke'];
    isBackground: OptionsListProps['isBackground'];
};

export function resolveOptionsListStyle({ withStroke, isBackground }: ResolveOptionsListStyleProps) {

    return useMemo(() => ({
        borderWidth: withStroke ? 1 : undefined,
        backgroundColor: isBackground ? Colors.surface.containerExtraHigh : undefined,
        paddingHorizontal: isBackground ? Spacing['2xl'] : Spacing['none'],
    }), [withStroke, isBackground]);
};