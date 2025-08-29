import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        gap: Spacing['sm'],
        borderBottomWidth: 1,
        borderColor: Colors.outline.variant,
        paddingBottom: Spacing['2xl'],
    },
    container: {
        gap: Spacing['xl'],
    },
    title: {
        ...StyleSheet.flatten(Font.headline.small),
        color: Colors.surface.on,
        paddingHorizontal: Spacing['2xl'],
    },
});