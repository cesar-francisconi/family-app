import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";
import { headerHeight } from ".";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: Spacing['2xl'],
        position: 'absolute',
        zIndex: 1,
        borderColor: Colors.outline.variant,
    },
    headerLeftAndTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing['3xl'],
    },
    title: {
        ...StyleSheet.flatten(Font.headline.medium),
        color: Colors.surface.on,
    },
});