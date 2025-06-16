import { JSX } from "react";

export type HeaderRightProps = {
    withFirstAction?: boolean;
    withSecondAction?: boolean;
    withTertiaryAction?: boolean;
    firstAction?: JSX.Element;
    secondAction?: JSX.Element;
    tertiaryAction?: JSX.Element;
    fnfirstAction?: () => void;
    fnSecondAction?: () => void;
    fnTertiaryAction?: () => void;
};