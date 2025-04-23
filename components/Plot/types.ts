import { ButtonProps } from "../Button/types";

export type PlotProps = {
    title?: string;
    showTitle?: boolean;
    fullPlot?: boolean;
    descriptionNumberOfLines?: number;
    description: string;
    moreButtonTitle?: ButtonProps['title'];
    fnMoreButton: () => void;
};