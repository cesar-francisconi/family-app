import { ButtonTokens, ButtonTokensType } from "@/constants/Button";
import { ButtonProps } from "@/components/Button/types";

type SafeBorderRadius = NonNullable<ButtonProps['borderRadius']>;

type ButtonTokensTypeReturn = ButtonTokensType['type'][ButtonProps['type']]['variant'][ButtonProps['variant']]['size'][ButtonProps['size']]['borderRadius'][SafeBorderRadius]

export function getButtonToken(props: ButtonProps): ButtonTokensTypeReturn {
    const { type = 'primary', variant = 'filled', size = 'medium', borderRadius = 'none' } = props;

    return ButtonTokens.type[type].variant[variant].size[size].borderRadius[borderRadius];
}