import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start'
    },
    title: {
        ...StyleSheet.flatten(Font.title.medium),
        color: Colors.surface.on,
    },
    description: {
        ...StyleSheet.flatten(Font.body.small),
        color: Colors.surface.on,
    },
    more: {

    }
});