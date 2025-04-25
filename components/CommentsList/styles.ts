import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.surface.container,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: Spacing['2xl'],
        borderBottomWidth: 1,
        borderColor: Colors.outline.variant,
    },
    title: {
        ...StyleSheet.flatten(Font.headline.medium),
        color: Colors.surface.on,
        textTransform: 'capitalize',
    },
    contentContainerStyle: {
        padding: Spacing['2xl'],
        gap: Spacing['5xl'],
    },
    addCommentWithAvatar: {
        padding: Spacing['2xl'],
        borderTopWidth: 1,
        borderColor: Colors.outline.variant,
    },
});