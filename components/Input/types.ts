import { GestureResponderEvent } from "react-native";

export type InputProps = {
    variant: 'filled' | 'outlined';
    state: 'default' | 'focus' | 'filled' | 'error' | 'validated' | 'disabled';
    borderRadius: 'none' | 'small' | 'medium' | 'large';
    showLabel?: boolean;
    label?: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    fnLeftIcon?: () => void;
    fnRightIcon?: () => void;
    showHelpMessageAndLabelCheck?: boolean;
    showHelpMessage?: boolean;
    helpMessage?: string;
    helpMessageColor?: string;
    fnHelpMessage?: () => void;
    showLabelCheck?: boolean;
    labelCheckLabel?: string;
    checkedLabelCheck?: boolean;
    isError?: boolean;
    errorMessage?: string;
};