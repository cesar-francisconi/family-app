import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    text: {
        ...StyleSheet.flatten(Font.headline.medium),
        color: Colors.surface.on,
    }
});