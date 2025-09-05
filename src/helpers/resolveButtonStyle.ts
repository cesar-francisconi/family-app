import { ButtonPropsExtended } from "../components/Button/types";
import { ButtonStyleTokens } from "../constants/Button/primary";
import { Colors } from "../constants/Colors";

interface ResolveButtonStyleProps {
    disabled: ButtonPropsExtended['disabled'];
    background: ButtonStyleTokens['background'];
    size: ButtonPropsExtended['size'];
    text: ButtonStyleTokens['text'];
};

export function resolveButtonStyle({
    disabled,
    background,
    size,
    text,
}: ResolveButtonStyleProps) {
    return {
        backgroundColor: disabled ? Colors.disabled.background : background.backgroundColor,
        textColor: disabled ? Colors.disabled.text : text.color,
        iconSize: size === 'medium' ? 'small' : 'extraSmall',
    };
};