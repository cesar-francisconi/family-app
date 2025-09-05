import { BorderRadius } from "../constants/BorderRadius";
import {
    ActorCardProps,
    BorderRadiusActorCard,
} from "../components/ActorCard/types";
import { Colors } from "../constants/Colors";

function resolveActorCardStyle(
    withStroke: ActorCardProps['withStroke'],
    borderRadius: Exclude<ActorCardProps['borderRadius'], undefined>,
) {
    const borderRadiusMap: Record<BorderRadiusActorCard, number> = {
        none: BorderRadius.none,
        small: BorderRadius.xs,
        medium: BorderRadius.sm,
        large: BorderRadius.md,
    };

    return {
        borderWith: withStroke ? 0.5 : undefined,
        borderColor: withStroke ? Colors.outline.main : undefined,
        borderRadius: borderRadiusMap[borderRadius],
    };
};

export { resolveActorCardStyle };