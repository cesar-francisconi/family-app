import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        gap: Spacing['sm'],
    },
    title: {
        ...StyleSheet.flatten(Font.title.medium),
        color: Colors.surface.on,
    },
    description: {
        ...StyleSheet.flatten(Font.body.medium),
        color: Colors.surface.on,
    },
    more: {

    }
});