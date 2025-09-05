import { Colors } from "@/src/constants/Colors";
import { headerHeight } from "@/src/constants/DefautConfig";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: headerHeight,
        paddingHorizontal: Spacing['2xl'],
        position: 'absolute',
        zIndex: 1,
        borderColor: Colors.outline.variant,
    },
    headerLeftAndTitleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing['3xl'],
    },
    title: {
        flex: 1,
        ...StyleSheet.flatten(Font.headline.medium),
        color: Colors.surface.on,
    },
});