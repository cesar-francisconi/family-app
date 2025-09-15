import { TextInputProps } from "react-native";
import { ButtonPropsExtended } from "../Button/types";
import { BaseSyntheticEvent } from "react";

export interface SearchProps extends TextInputProps {
    name: string;
    control: any;
    buttonOptions: Pick<ButtonPropsExtended, 'title'> & {
        onPress: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    };
};