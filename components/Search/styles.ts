import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.surface.containerHigh,
        alignItems: 'center',
        paddingHorizontal: Spacing['2xl'],
        height: 50,
        gap: Spacing['2xl'],
    },
    leftIconAndInputContainer: {
        flexDirection: 'row',
        gap: Spacing['2xl'],
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    input: {
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.on,
    },
});