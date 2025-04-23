import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

    },
    titleContainer: {
        marginBottom: Spacing.sm,
    },
    title: {
        ...StyleSheet.flatten(Font.headline.small),
    },
    firstTitle: {
        color: Colors.surface.onVariant,
    },
    secondTitle: {
        color: Colors.surface.on,
    },
    image: {
        aspectRatio: 0.8,
    },
    row: {
        flexDirection: 'row',
    },
    item: {
        gap: Spacing.sm,
    },
});