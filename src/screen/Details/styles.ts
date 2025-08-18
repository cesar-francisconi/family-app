import { headerHeight } from "@/src/components/Header";
import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: headerHeight,
    },
    contentContainerStyle: {
        paddingBottom: Spacing['2xl'],
    },
    container: {
        padding: Spacing['2xl'],
        gap: Spacing['4xl'],
    },
    movieMainCardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        backgroundColor: Colors.surface.main,
        borderColor: Colors.surface.main,
        zIndex: 999,
    },
    movieMainCardThumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradient: {
        position: 'absolute',
        width: '100%',
        zIndex: -1,
        opacity: 0.6,
    },
    movieMainCard: {

    },
    video: {

    },
    playCircleButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        width: 70,
        height: 70,
        borderRadius: 999,
        backgroundColor: Colors.primary.main,
        borderWidth: 2,
        borderColor: Colors.inverseSurface.on,
    },
});