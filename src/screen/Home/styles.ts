import { headerHeight } from "@/src/components/Header";
import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainerStyle: {
        gap: Spacing['5xl'],
        paddingTop: headerHeight + Spacing['2xl'],
        paddingBottom: Spacing['2xl'],
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: headerHeight,
    },
});