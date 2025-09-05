import { CommentActionRowProps } from "../components/CommentActionRow/types";
import { BorderRadius } from "../constants/BorderRadius";

export function resolveCommentActionRowStyle(
    borderRadius: Exclude<CommentActionRowProps['borderRadius'], undefined>,
    withStroke: CommentActionRowProps['withStroke'],
) {
    const borderRadiusMap = {
        large: BorderRadius['md'],
        medium: BorderRadius['sm'],
        small: BorderRadius['xs'],
        none: BorderRadius['none'],
    };

    return {
        borderRadius: borderRadiusMap[borderRadius],
        borderWidth: withStroke ? 1 : undefined,
    };
};