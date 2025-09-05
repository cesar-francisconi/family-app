import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '80%',
        gap: Spacing['md'],
        paddingHorizontal: Spacing['2xl'],
        marginTop: Spacing['2xl'],
    },
    searchHistoryContainer: {
        flexDirection: 'row',
        gap: Spacing['lg'],
        flexWrap: 'wrap',
    },
    title: {
        ...StyleSheet.flatten(Font.label.extraLargeProminent),
        color: Colors.surface.on,
    },
    button: {

    },
});