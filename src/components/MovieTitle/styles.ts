import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

    },
    timeAndDateContainer: {
        flexDirection: 'row',
        gap: Spacing["2xl"],
    },
    title: {
        ...StyleSheet.flatten(Font.headline.large),
        color: Colors.surface.on,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing["md"],
    },
    time: {
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.onVariant,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing["md"],
    },
    date: {
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.onVariant,
    },
});