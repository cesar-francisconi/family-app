import { BorderRadius } from "@/src/constants/BorderRadius";
import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

    },
    handleIndicatorStyle: {
        backgroundColor: Colors.surface.containerExtraHigh,
    },
    backgroundStyle: {
        backgroundColor: Colors.surface.containerHigh,
        borderRadius: BorderRadius['md'],
    },
    bottomSheet: {
        zIndex: 999,
    },
    renderBackdrop: {
        zIndex: 50,
        position: 'absolute',
    },
    containerStyle: {
        margin: Spacing['2xl'],
    },
    bottomSheetViewContainer: {
        flex: 1,
        backgroundColor: Colors.surface.containerHigh,
        paddingHorizontal: Spacing['2xl'],
        gap: Spacing['5xl'],
        paddingBottom: Spacing['5xl'],
        borderRadius: BorderRadius['md'],
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