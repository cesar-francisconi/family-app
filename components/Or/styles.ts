import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
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