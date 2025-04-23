import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    label: {
        ...StyleSheet.flatten(Font.label.extraLargeProminent),
        color: Colors.surface.on,
        textTransform: 'capitalize',
    }
});