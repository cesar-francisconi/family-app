import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: Spacing.md,
        alignItems: 'center',
    },
    label: {
        ...StyleSheet.flatten(Font.label.large),
        color: Colors.surface.on,
    }
});