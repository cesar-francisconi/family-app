import { headerHeight } from "@/src/components/Header";
import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.surface.container,
    },
    container: {
        gap: Spacing['2xl'],
        padding: Spacing['2xl'],
        paddingTop: Spacing['2xl'] + headerHeight,
    },
});