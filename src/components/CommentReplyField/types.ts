import { TextInputProps } from "react-native";
import { ButtonPropsExtended } from "../Button/types";

export interface CommentReplyFieldProps extends TextInputProps {
    buttonOptions?: {
        onPress?: ButtonPropsExtended['onPress'];
        disabled?: ButtonPropsExtended['disabled'];
        isLoading?: ButtonPropsExtended['isLoading'];
        leftIcon?: ButtonPropsExtended['leftIcon'];
    };
};