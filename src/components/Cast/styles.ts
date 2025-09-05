import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: Spacing.sm,
    },
    cast: {
        flexGrow: 0,
    },
    title: {
        ...StyleSheet.flatten(Font.headline.medium),
        color: Colors.surface.on,
    },
    contentContainerStyle: {
        gap: Spacing.lg,
    }
});