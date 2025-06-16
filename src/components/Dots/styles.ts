import { BorderRadius } from "@/src/constants/BorderRadius";
import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: Spacing['sm'],
        flexDirection: 'row'
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: BorderRadius['2xl'],
    },
});