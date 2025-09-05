import { BorderRadius } from "@/src/constants/BorderRadius";
import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: Colors.outline.variant,
    },
    container: {
        backgroundColor: Colors.surface.container,
        flex: 1,
        padding: Spacing['2xl'],
        gap: Spacing['4xl'],
        borderTopLeftRadius: BorderRadius['md'],
        borderTopRightRadius: BorderRadius['md'],
    },
    movieMainCard: {
        height: 216,
    },
});