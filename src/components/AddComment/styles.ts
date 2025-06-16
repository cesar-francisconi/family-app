import { Colors } from "@/src/constants/Colors";
import { Font } from "@/src/constants/Font";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";
import { addCommentHeight } from ".";

export const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //paddingHorizontal: Spacing['lg'],
        //paddingVertical: Spacing['sm'],
        justifyContent: 'center',
        //: Colors.surface.containerExtraHigh,

        backgroundColor: Colors.surface.containerExtraHigh,
        flex: 1,
        borderRadius: 999,
        paddingHorizontal: Spacing['2xl'],
        color: Colors.surface.onVariant,
        borderColor: Colors.surface.on,
    },
    text: {
        ...StyleSheet.flatten(Font.label.large),
        color: Colors.surface.onVariant,
    },
});