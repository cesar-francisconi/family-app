import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: Spacing['sm'],
    },
    title: {
        ...StyleSheet.flatten(Font.headline.extraLarge),
        color: Colors.surface.on,
    },
    description: {
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.onVariant,
    },
});