import { BorderRadius } from "@/src/constants/BorderRadius";
import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.surface.container,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        backgroundColor: Colors.surface.containerExtraHigh,
        width: 35,
        height: 4,
        borderRadius: BorderRadius['2xl'],
    },
});