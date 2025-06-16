import { BorderRadius } from "@/src/constants/BorderRadius";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: Spacing['2xl'],
    },
    actions: {
        padding: Spacing['lg'],
        borderRadius: BorderRadius['2xl'],
    },
});