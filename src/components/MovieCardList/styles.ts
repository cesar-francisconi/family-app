import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: Colors.outline.variant,
        paddingBottom: Spacing['sm'],
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
    scrollViewContainer: {

    },
    contentContainerStyle: {
        paddingVertical: Spacing['2xl'],
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