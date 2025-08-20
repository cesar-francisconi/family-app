import { StyleSheet } from "react-native";
import { DefaultAvatar } from "../components/Avatar/types";
import { Font } from "../constants/Font";

export function getAvatarInitialFont(size: Exclude<DefaultAvatar['size'], undefined>) {
    const initialFontMap = {
        large: StyleSheet.flatten(Font.headline.large),
        medium: StyleSheet.flatten(Font.headline.medium),
        small: StyleSheet.flatten(Font.label.small),
    };

    return initialFontMap[size];
};