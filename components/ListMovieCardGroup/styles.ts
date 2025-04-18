import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        gap: Spacing.sm,
    },
    title: {
        ...StyleSheet.flatten(Font.headline.small),
        color: Colors.surface.on,
    },
    container: {

    },
    contentContainerStyle: {
        gap: Spacing.lg,
    }
});