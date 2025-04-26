import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: Spacing['lg'],
    },
    text: {
        ...StyleSheet.flatten(Font.label.small),
        textTransform: 'capitalize',
    },
    prop: {
        color: Colors.surface.on,
    },
    propValue: {
        color: Colors.surface.onVariant,
        flex: 1,
    },
});