import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: Spacing['md'],
        backgroundColor: Colors.surface.containerHigh,
        padding: Spacing['xl'],
    },
    commentsContainer: {
        flexDirection: 'row',
        gap: Spacing['sm'],
    },
    text: {
        ...StyleSheet.flatten(Font.label.largeProminent),
    },
    comments: {
        color: Colors.surface.on,
    },
    commentsNumbers: {
        paddingRight: 20,
        color: Colors.surface.onVariant,
    }
});