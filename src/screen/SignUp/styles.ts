import { headerHeight } from "@/src/components/Header";
import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.surface.main,
        padding: Spacing['2xl'],
        paddingTop: Spacing['2xl'] + headerHeight,
        gap: Spacing['8xl'],
    },
    actionContainer: {
        gap: Spacing['5xl'],
    },
    firstActionContainer: {
        gap: Spacing['4xl'],
    },
});