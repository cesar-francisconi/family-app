import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing['2xl'],
        height: 16,
    },
    line: {
        flex: 1,
        height: 0.4,
        backgroundColor: Colors.outline.main,
    },
    text: {
        ...StyleSheet.flatten(Font.label.large),
        color: Colors.outline.main,
        textTransform: 'capitalize',
    },
});