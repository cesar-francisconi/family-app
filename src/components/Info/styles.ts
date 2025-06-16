import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: Spacing['lg'],
    },
    text: {
        ...StyleSheet.flatten(Font.label.large),
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