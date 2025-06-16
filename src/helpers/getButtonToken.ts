import { ButtonTokens } from "@/src/constants/Button";
import { ButtonProps } from "@/src/components/Button/types";
import { ButtonStyleTokens } from "@/src/constants/Button/primary";

export function getButtonToken(props: ButtonProps): ButtonStyleTokens {

    const {
        type = 'primary',
        variant = 'filled',
        size = 'medium',
        borderRadius = 'none',
    } = props;

    return ButtonTokens.type[type].variant[variant].size[size].borderRadius[borderRadius];
}