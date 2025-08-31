import { ButtonPropsExtended } from "../components/Button/types";
import { ButtonStyleTokens } from "../constants/Button/primary";
import { Colors } from "../constants/Colors";

export function getButtonTextColor(
    disabled: ButtonPropsExtended['disabled'],
    text: ButtonStyleTokens['text']
) {
    return disabled ? Colors.disabled.text : text.color;
};