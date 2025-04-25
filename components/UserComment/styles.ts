import { Colors } from "@/constants/Colors";
import { Font } from "@/constants/Font";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        gap: Spacing['lg'],
    },
    container: {
        gap: Spacing['4xl'],
        flex: 1,
    },
    reactionGroupAndCommentAndUsernameContainer: {
        gap: Spacing['lg'],
    },
    commentAndUsernameContainer: {
        gap: Spacing['none'],
    },
    usernameContainer: {
        flexDirection: 'row',
        gap: Spacing['sm'],
    },
    header: {
        ...StyleSheet.flatten(Font.label.small),
        color: Colors.surface.onVariant,
    },
    username: {

    },
    hyphen: {

    },
    time: {

    },
    comment: {
        ...StyleSheet.flatten(Font.body.small),
        color: Colors.surface.on,
    },
    answersContainer: {
        flexDirection: 'row',
        gap: Spacing['sm'],
    },
    answersNumber: {
        ...StyleSheet.flatten(Font.label.largeProminent),
        color: Colors.surface.on,
    },
    answers: {
        ...StyleSheet.flatten(Font.label.largeProminent),
        color: Colors.surface.on,
    }
});