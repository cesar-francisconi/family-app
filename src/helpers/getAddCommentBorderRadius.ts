import { AddCommentProps } from "../components/AddComment/types";
import { BorderRadius } from "../constants/BorderRadius";

export function getAddCommentBorderRadius(
    borderRadius: Exclude<AddCommentProps['borderRadius'], undefined>
): number {
    const borderRadiusMap = {
        none: BorderRadius['none'],
        small: BorderRadius['xs'],
        medium: BorderRadius['sm'],
        large: BorderRadius['2xl'],
    };

    return borderRadiusMap[borderRadius];
};