import { BorderRadius } from "@/constants/BorderRadius";
import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        borderColor: Colors.outline.main,
        borderRadius: BorderRadius["2xl"],
        overflow: 'hidden',
        backgroundColor: Colors.inverseSurface.main,
        justifyContent: 'center',
        alignItems: 'center',
    },
    initial: {
        ...StyleSheet.flatten(Font.headline.large),
        color: Colors.inverseSurface.on,
        textTransform: 'uppercase',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});