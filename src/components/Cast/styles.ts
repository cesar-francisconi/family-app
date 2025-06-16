import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 0,
    },
    mainContainer: {
        gap: Spacing.sm,
    },
    title: {
        ...StyleSheet.flatten(Font.headline.medium),
        color: Colors.surface.on,
    },
    contentContainerStyle: {
        gap: Spacing.lg,
    }
});