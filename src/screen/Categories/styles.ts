import { headerHeight } from "@/src/components/Header";
import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.surface.main,
        borderTopWidth: 1,
        borderColor: Colors.outline.variant,
        paddingTop: Spacing['2xl'] + headerHeight,
    },
});