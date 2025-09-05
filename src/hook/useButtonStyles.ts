import { useMemo } from "react";
import { ButtonPropsExtended } from "../components/Button/types";
import { getButtonToken } from "../helpers/getButtonToken";
import { extractButtonStyle } from "../helpers/extractButtonStyle";
import { resolveButtonStyle } from "../helpers/resolveButtonStyle";

export function useButtonStyles(props: ButtonPropsExtended) {
    const { disabled, size = "medium" } = props;

    const token = useMemo(
        () =>
            getButtonToken({
                type: props.type,
                variant: props.variant,
                size: props.size,
                borderRadius: props.borderRadius,
            }),
        [props.type, props.variant, props.size, props.borderRadius]
    );

    const { background, border, text } = extractButtonStyle(token);

    const { backgroundColor, iconSize, textColor } = resolveButtonStyle({ background, disabled, size, text });

    return {
        background,
        border,
        text,
        backgroundColor,
        textColor,
        iconSize,
    };
};
