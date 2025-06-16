import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";
import { addCommentHeight } from "../AddComment";
import { Font } from "@/src/constants/Font";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    input: {
        height: addCommentHeight,
        backgroundColor: Colors.surface.containerExtraHigh,
        flex: 1,
        borderRadius: 999,
        paddingHorizontal: Spacing['2xl'],
        ...StyleSheet.flatten(Font.label.large),
        color: Colors.surface.onVariant,
        borderColor: Colors.surface.on,
    },
});