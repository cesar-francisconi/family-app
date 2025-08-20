import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: Spacing['sm'],
    },
    message: {
        ...StyleSheet.flatten(Font.label.extraLarge),
    },
    actionLabel: {
        ...StyleSheet.flatten(Font.label.extraLargeProminent),
    }
});