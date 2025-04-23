import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: Spacing.sm,
    },
    image: {
        aspectRatio: 0.75,
    },
    title: {
        ...StyleSheet.flatten(Font.label.small),
        color: Colors.surface.on,
        paddingHorizontal: Spacing.sm,
    }
});