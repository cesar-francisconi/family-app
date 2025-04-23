import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    firstText: {
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.on,
    },
    secondText: {
        ...StyleSheet.flatten(Font.label.extraLargeProminent),
        color: Colors.primary.main,
    }
});