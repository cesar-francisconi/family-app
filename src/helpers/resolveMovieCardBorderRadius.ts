import { MovieCardPropsDefault } from "../components/MovieCard/types";
import { BorderRadius } from "../constants/BorderRadius";

export function resolveMovieCardBorderRadius(borderRadius: Exclude<MovieCardPropsDefault['borderRadius'], undefined>) {
    const borderRadiusMap = {
        none: BorderRadius['none'],
        large: BorderRadius['md'],
        medium: BorderRadius['sm'],
        small: BorderRadius['xs'],
    };

    return borderRadiusMap[borderRadius];
};
