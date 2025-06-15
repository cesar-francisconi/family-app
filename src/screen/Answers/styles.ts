import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    selectedParentCommentContainer: {
        padding: Spacing['2xl'],
        backgroundColor: Colors.surface.containerExtraHigh,
    },
    contentContainerStyle: {
        paddingLeft: 32 + Spacing['2xl'], // 32 é o tamanho do avatar (width); e 16 é o paddingHorizontal da tela. Assim a base left fica ajustado exatamente no canto esquerdo do avatar do comentário.
        padding: Spacing['2xl'],
        gap: Spacing['5xl'],
    },
    commentReplyFieldContainer: {
        padding: Spacing['3xl'],
        borderTopWidth: 1,
        borderColor: Colors.outline.variant,
    },
});