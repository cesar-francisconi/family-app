import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: Spacing['2xl'],
        alignItems: 'center',
    },
    likeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing['sm'],
    },
    likeQuantity: {
        ...StyleSheet.flatten(Font.label.baselineSmall),
        color: Colors.surface.on,
    }
});