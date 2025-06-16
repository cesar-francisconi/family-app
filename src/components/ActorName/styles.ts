import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 20,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        width: '100%',
        height: 20,
        position: 'absolute',
        backgroundColor: Colors.surface.main,
    },
    text: {
        width: '100%',
        textAlign: 'center',
        color: Colors.surface.on,
        ...StyleSheet.flatten(Font.label.extraSmall),
        paddingHorizontal: Spacing.sm,
        textTransform: 'capitalize',
    },
});