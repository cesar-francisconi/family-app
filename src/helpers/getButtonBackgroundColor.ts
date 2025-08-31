import { ButtonPropsExtended } from "../components/Button/types";
import { ButtonStyleTokens } from "../constants/Button/primary";
import { Colors } from "../constants/Colors";

export function getButtonBackgroundColor(
    disabled: ButtonPropsExtended['disabled'],
    background: ButtonStyleTokens['background']
) {
    return disabled ? Colors.disabled.background : background.backgroundColor;
};