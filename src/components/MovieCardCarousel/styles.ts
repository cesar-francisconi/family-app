import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: Spacing['lg'],
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingHorizontal: Spacing['2xl'],
    },
    contentContainerStyle: {
        gap: Spacing.lg,
        paddingHorizontal: Spacing['2xl'],
    },
    title: {
        ...StyleSheet.flatten(Font.headline.medium),
        color: Colors.surface.on,
        flex: 1,
    }
});