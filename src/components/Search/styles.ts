import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.surface.containerHigh,
    },
    input: {
        flex: 1,
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.on,
        paddingHorizontal: Spacing['2xl'],
    },
});