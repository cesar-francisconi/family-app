import { Movie } from "@/movie";
import { JSX } from "react";

export type MovieListItemPropsDefault = {
    borderRadius?: 'none' | 'small' | 'medium' | 'large';
    withBorderBottom?: boolean;
};

export type MovieListItemProps = Movie & MovieListItemPropsDefault;