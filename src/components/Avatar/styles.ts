import { BorderRadius } from "@/src/constants/BorderRadius";
import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        borderColor: Colors.outline.main,
        borderRadius: BorderRadius["2xl"],
        overflow: 'hidden',
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