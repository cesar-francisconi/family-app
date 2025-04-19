import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        gap: Spacing.sm,
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingHorizontal: 16,
    },
    contentContainerStyle: {
        gap: Spacing.lg,
        paddingHorizontal: 16,
    },
    title: {
        ...StyleSheet.flatten(Font.headline.smallProminent),
        color: Colors.surface.on,
        textTransform: 'capitalize',
        flex: 1,
    }
});