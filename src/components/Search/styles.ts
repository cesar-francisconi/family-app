import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.surface.containerHigh,
        paddingLeft: Spacing['2xl'],
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
        flex: 1,
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.on,
    },
});