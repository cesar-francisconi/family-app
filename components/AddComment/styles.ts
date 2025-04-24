import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Spacing['lg'],
        paddingVertical: Spacing['sm'],
        backgroundColor: Colors.surface.containerExtraHigh,
    },
    text: {
        ...StyleSheet.flatten(Font.label.large),
        color: Colors.surface.onVariant,
    },
});