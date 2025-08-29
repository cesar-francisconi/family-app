import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { screenWidth } from "@/src/constants/ScreenDimensions";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

const screenMovieCard = screenWidth / 3.6;

export const styles = StyleSheet.create({
    container: {
        gap: Spacing.sm,
        width: screenMovieCard, // 96
    },
    image: {
        width: screenMovieCard, // 96
        aspectRatio: 0.75,
    },
    moreContainer: {
        width: screenMovieCard, // 96
        aspectRatio: 0.75,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary.main,
        gap: Spacing['lg'],
    },
    moreText: {
        ...StyleSheet.flatten(Font.label.extraLargeProminent),
        color: Colors.primary.main,
    },
    title: {
        ...StyleSheet.flatten(Font.label.extraLarge),
        color: Colors.surface.onVariant,
        paddingHorizontal: Spacing.sm,
    }
});