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
    answersContainer: {
        flex: 1,
    },
    selectedParentCommentContainer: {
        padding: Spacing['2xl'],
        paddingBottom: 0,
        backgroundColor: Colors.surface.containerExtraHigh,
    },
    contentContainerStyle: {
        gap: Spacing['5xl'],
    },
    commentReplyFieldContainer: {
        padding: Spacing['3xl'],
        borderTopWidth: 1,
        borderColor: Colors.outline.variant,
    },
    loadingOverlay: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
});