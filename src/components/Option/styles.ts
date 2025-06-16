import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderColor: Colors.outline.main,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Spacing['sm'],
        paddingVertical: Spacing['xl'],
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing['xl'],
        flex: 1,
    },
    text: {
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.on,
    }
});