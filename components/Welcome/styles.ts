import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: Spacing['sm'],
    },
    firstText: {
        ...StyleSheet.flatten(Font.headline.extraLarge),
        color: Colors.surface.on,
    },
    secondText: {
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.onVariant,
    },
});