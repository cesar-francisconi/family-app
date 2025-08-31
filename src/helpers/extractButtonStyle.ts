import { StyleSheet } from "react-native";
import { ButtonStyleTokens } from "../constants/Button/primary";

export function extractButtonStyle(token: ButtonStyleTokens) {
    return StyleSheet.flatten({
        background: token.background,
        border: token.border,
        text: token.text,
    });
};