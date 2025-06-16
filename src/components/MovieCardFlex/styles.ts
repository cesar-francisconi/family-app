import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: Spacing.sm,
    },
    image: {
        aspectRatio: 0.75,
    },
    title: {
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.onVariant,
        paddingHorizontal: Spacing.sm,
    }
});