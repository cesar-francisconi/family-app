import { BorderRadius } from "@/src/constants/BorderRadius";
import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { screenHeight } from "@/src/constants/ScreenDimensions";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: screenHeight,
        zIndex: 999,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Spacing['6xl'],
        backgroundColor: Colors.surface.transparentMain40,
    },
    box: {
        backgroundColor: Colors.inverseSurface.main,
        width: '100%',
        padding: Spacing['2xl'],
        borderRadius: BorderRadius['md'],
        gap: Spacing['2xl'],
    },
    description: {
        ...StyleSheet.flatten(Font.body.medium),
        color: Colors.inverseSurface.on,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: Spacing['4xl'],
    },
});