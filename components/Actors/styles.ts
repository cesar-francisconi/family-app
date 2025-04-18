import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 0,
    },
    mainContainer: {
        gap: Spacing.sm,
    },
    title: {
        ...StyleSheet.flatten(Font.headline.smallProminent),
        color: Colors.surface.on,
    },
    contentContainerStyle: {
        gap: Spacing.lg,
    }
});