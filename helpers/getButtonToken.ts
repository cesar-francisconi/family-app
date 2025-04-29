import { ButtonTokens } from "@/constants/Button";
import { ButtonProps } from "@/components/Button/types";
import { ButtonStyleTokens } from "@/constants/Button/primary";

export function getButtonToken(props: ButtonProps): ButtonStyleTokens {
    
    const { type = 'primary', variant = 'filled', size = 'medium', borderRadius = 'none' } = props;

    return ButtonTokens.type[type].variant[variant].size[size].borderRadius[borderRadius];
}