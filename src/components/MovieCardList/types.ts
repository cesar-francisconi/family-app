import { MovieCardProps } from "../MovieCard/types";
import { MovieCardFlexProps } from "../MovieCardFlex/types";

export type MovieCardListProps = {
    data: MovieCardProps[],
    gap?: number;
    numColumns?: 3 | 4;
    movieCardFlexBorderRadius?: MovieCardFlexProps['borderRadius'],
    movieCardFlexWithTitle?: MovieCardFlexProps['withTitle'];
    withTitle?: boolean;
    firstTitle?: string;
    secondTitle?: string;
};