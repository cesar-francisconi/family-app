import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Spacing['2xl'],
        paddingVertical: Spacing['md'],
        alignSelf: 'flex-start',
    },
    text: {
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.on,
        textTransform: 'capitalize',
    },
});