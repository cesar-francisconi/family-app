import { BorderRadius } from "@/src/constants/BorderRadius";
import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    commentContainer: {
        flexDirection: 'row',
        gap: Spacing['xl'],
    },
    content: {
        gap: Spacing['4xl'],
        flex: 1,
    },
    headerAndReactions: {
        gap: Spacing['xl'],
    },
    headerContent: {
        gap: Spacing['sm'],
    },
    userInfoRow: {
        flexDirection: 'row',
        gap: Spacing['sm'],
    },
    header: {
        ...StyleSheet.flatten(Font.label.large),
        color: Colors.surface.onVariant,
    },
    username: {

    },
    separator: {

    },
    time: {

    },
    edit:{

    },
    commentText: {
        ...StyleSheet.flatten(Font.body.small),
        color: Colors.surface.on,
    },
    answersButton: {
        flexDirection: 'row',
        gap: Spacing['sm'],
        alignSelf: 'flex-start',
        padding: Spacing['lg'],
        marginTop: -Spacing['lg'],
        marginLeft: -Spacing['lg'],
    },
    answersCount: {
        ...StyleSheet.flatten(Font.body.small),
        color: Colors.surface.on,
    },
    answersText: {
        ...StyleSheet.flatten(Font.body.small),
        color: Colors.surface.on,
    },
    moreButton: {
        alignSelf: 'flex-start',
        padding: Spacing['2xl'],
        marginTop: -Spacing['2xl'],
        marginRight: -Spacing['2xl'],
        borderRadius: BorderRadius['2xl'],
    },
});