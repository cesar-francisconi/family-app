import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { screenWidth } from "@/src/constants/ScreenDimensions";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

const screenMovieCard = screenWidth / 3.6;

export const styles = StyleSheet.create({
    movieItemRow: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        gap: Spacing['xl'],
        borderColor: Colors.outline.variant,
        paddingBottom: Spacing['lg'],
    },
    image: {
        width: screenMovieCard,
        aspectRatio: 0.75,
    },
    content: {
        gap: Spacing['xl'],
        flex: 1,
    },
    title: {
        ...StyleSheet.flatten(Font.headline.medium),
        color: Colors.surface.on,
    },
    director: {
        ...StyleSheet.flatten(Font.body.medium),
        color: Colors.surface.onVariant,
    },
    cast: {
        ...StyleSheet.flatten(Font.body.medium),
        color: Colors.surface.onVariant,
    },
    genre: {
        ...StyleSheet.flatten(Font.body.medium),
        color: Colors.surface.onVariant,
    },
});