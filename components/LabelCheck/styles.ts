import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
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