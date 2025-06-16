import { TextInputProps } from "react-native";

export interface SearchProps extends TextInputProps {
    fnButton: () => void;
    buttonTitle?: string;
    buttonDisabled?: boolean;
};