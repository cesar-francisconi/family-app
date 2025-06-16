import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: Spacing['md'],
        paddingHorizontal: Spacing['2xl'],
        flex: 1,
    },
    title: {
        ...StyleSheet.flatten(Font.label.extraLargeProminent),
        color: Colors.surface.on,
    },
    flatListContainer: {
        borderColor: Colors.outline.variant,
        flex: 1,
    },
    contentContainerStyle: {
        paddingTop: Spacing['lg'],
        gap: Spacing['lg'],
    }
});