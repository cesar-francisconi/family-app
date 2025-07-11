import { JSX } from "react";
import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
    name: string;
    control: any;
    variant: 'filled' | 'outlined';
    state: 'default' | 'focus' | 'filled' | 'error' | 'validated' | 'disabled';
    borderRadius?: 'none' | 'small' | 'medium' | 'large';
    withLabel?: boolean;
    label?: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    fnLeftIcon?: () => void;
    fnRightIcon?: () => void;
    withHelpMessageAndLabelCheck?: boolean;
    withHelpMessage?: boolean;
    helpMessage?: string;
    helpMessageColor?: string;
    fnHelpMessage?: () => void;
    withLabelCheck?: boolean;
    labelCheckLabel?: string;
    isCheckedLabelCheck?: boolean;
};