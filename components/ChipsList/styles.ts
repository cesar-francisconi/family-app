import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        width: '80%',
        gap: Spacing['sm'],
        paddingHorizontal: Spacing['2xl'],
    },
    container: {
        flexDirection: 'row',
        gap: Spacing['lg'],
        flexWrap: 'wrap',
    },
    title: {
        ...StyleSheet.flatten(Font.headline.small),
        color: Colors.surface.on,
    },
    button: {

    },
});