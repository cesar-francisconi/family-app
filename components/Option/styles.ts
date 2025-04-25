import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Spacing['sm'],
        paddingVertical: Spacing['xl'],
    },
    leftIconAndTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing['lg'],
        flex: 1,
    },
    text: {
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.on,
    }
});