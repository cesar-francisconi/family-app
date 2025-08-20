import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: Spacing['lg'],
        backgroundColor: Colors.surface.containerHigh,
        padding: Spacing['xl'],
        borderColor: Colors.outline.main,
    },
    header: {
        flexDirection: 'row',
        gap: Spacing['sm'],
    },
    text: {
        ...StyleSheet.flatten(Font.body.medium),
    },
    title: {
        maxWidth: '50%',
        color: Colors.surface.on,
    },
    count: {
        maxWidth: '50%',
        color: Colors.surface.onVariant,
    }
});