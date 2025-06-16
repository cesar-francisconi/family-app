import { ButtonProps } from "../Button/types";

export type PlotProps = {
    title?: string;
    withTitle?: boolean;
    fullPlot?: boolean;
    descriptionNumberOfLines?: number;
    description: string;
    withButton?: boolean;
    buttonTitle?: ButtonProps['title'];
    fnButton?: () => void;
};