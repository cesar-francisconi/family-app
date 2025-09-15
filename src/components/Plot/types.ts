import { ButtonPropsExtended } from "../Button/types";

export type PlotProps = {
    title?: string;
    withTitle?: boolean;
    fullPlot?: boolean;
    descriptionNumberOfLines?: number;
    description: string;
    withButton?: boolean;
    buttonOptions?: Pick<ButtonPropsExtended, 'title' | 'onPress'>;
};