import { TextInputProps } from "react-native";

export interface CommentReplyFieldProps extends TextInputProps {
    fnButton?: () => void;
    buttonDisabled?: boolean;
};