import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: Spacing['sm'],
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