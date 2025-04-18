import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        gap: Spacing.lg,
        paddingRight: Spacing.lg,
    },
    image: {
        width: 112,
        height: 64,
    },
    title: {
        ...StyleSheet.flatten(Font.label.extraLargeProminent),
        color: Colors.surface.on,
        flex: 1,
    },
});