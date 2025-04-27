import { BorderRadius } from "@/constants/BorderRadius";
import { Colors } from "@/constants/Colors";
import { Spacing } from "@/constants/Spacing";
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