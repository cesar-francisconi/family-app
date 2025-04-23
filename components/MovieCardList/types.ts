import { MovieCardProps } from "../MovieCard/types";
import { MovieCardFlexProps } from "../MovieCardFlex/types";

export type MovieCardListProps = {
    firstTitle?: string;
    secondTitle?: string;
    showTitle?: boolean;
    data: MovieCardProps[],
    gap?: number;
    numColumns?: 3 | 4;
    movieCardFlexBorderRadius?: MovieCardFlexProps['borderRadius'],
    movieCardFlexShowTitle?: MovieCardFlexProps['showTitle'];
};