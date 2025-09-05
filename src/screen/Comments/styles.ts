import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: Colors.outline.variant,
        backgroundColor: Colors.surface.container,
    },
    commentsContainer: {
        flex: 1,
    },
    contentContainerStyle: {
        padding: Spacing['2xl'],
        gap: Spacing['5xl'],
    },
    commentReplyFieldContainer: {
        padding: Spacing['3xl'],
        borderTopWidth: 1,
        borderColor: Colors.outline.variant,
    },
});