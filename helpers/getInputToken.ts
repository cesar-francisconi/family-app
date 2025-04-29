import { InputProps } from "@/components/Input/types";
import { inputStyles, InputStyleTokens } from "@/constants/Input";

export function getInputToken(props: InputProps): InputStyleTokens {

    const { variant = 'filled', state = 'default', borderRadius = 'medium' } = props;

    return inputStyles.variant[variant].state[state].borderRadius[borderRadius];
}