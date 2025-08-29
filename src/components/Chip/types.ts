import { TextStyle } from "react-native";

export type ChipProps = {
    text: string;
    isActive?: boolean;
    borderRadius?: 'none' | 'small' | 'medium' | 'large';
    textStyle?: TextStyle;
    fnChipPress?: () => void;
};