import { BorderRadius } from "@/src/constants/BorderRadius";
import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        zIndex: 999,
    },
    renderBackdrop: {
        zIndex: 999,
        position: 'absolute',
    },
    handleIndicatorStyle: {
        backgroundColor: Colors.surface.containerExtraHigh,
    },
    backgroundStyle: {
        backgroundColor: Colors.surface.containerHigh,
        borderRadius: BorderRadius['md'],
    },
    bottomSheetViewContainer: {
        padding: Spacing['3xl'],
        borderTopWidth: 1,
        borderColor: Colors.outline.variant,
        backgroundColor: Colors.surface.container,
    },
    title: {
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.onVariant,
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing['5xl'],
    },
    actionTitle: {
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.on,
    },
});