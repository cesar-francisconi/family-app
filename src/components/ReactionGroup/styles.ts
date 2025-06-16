import { BorderRadius } from "@/src/constants/BorderRadius";
import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
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
    },
    lottie: {
        width: 22,
        height: 35,
    },
    iconButton: {
        marginTop: -Spacing['md'],
        marginLeft: -Spacing['md'],
        padding: Spacing['md'],
        borderRadius: BorderRadius['2xl'],
    },
});