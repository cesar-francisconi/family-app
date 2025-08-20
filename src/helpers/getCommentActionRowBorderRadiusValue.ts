import { CommentActionRowProps } from "../components/CommentActionRow/types";
import { BorderRadius } from "../constants/BorderRadius";

export function getCommentActionRowBorderRadiusValue(borderRadius: Exclude<CommentActionRowProps['borderRadius'], undefined>) {
    const borderRadiusMap = {
        large: BorderRadius['md'],
        medium: BorderRadius['sm'],
        small: BorderRadius['xs'],
        none: BorderRadius['none'],
    };

    return borderRadiusMap[borderRadius];
};