import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {

    },
    at: {
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.on,
    },
    label: {

    },
    container: {

    },
    leftIconAndInput: {

    },
    input: {

    },
    error: {

    },
    helpTextContainer: {

    },
    helpText: {

    },
    rightIcon: {
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: Spacing['2xl'],
        marginRight: -Spacing['2xl'],
    },
});