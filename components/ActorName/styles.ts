import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
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
    text: {
        width: '100%',
        textAlign: 'center',
        color: Colors.surface.on,
        ...StyleSheet.flatten(Font.label.extraSmall),
        paddingHorizontal: Spacing.sm,
    },
    background: {
        width: '100%',
        height: 20,
        position: 'absolute',
        backgroundColor: Colors.surface.main,
    }
});