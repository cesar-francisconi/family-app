import { Colors } from "@/src/constants/Colors";
import { headerHeight } from "@/src/constants/DefautConfig";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.surface.main,
        gap: Spacing['7xl'],
        paddingHorizontal: Spacing['2xl'],
        paddingTop: Spacing['5xl'] + headerHeight,
    },
});