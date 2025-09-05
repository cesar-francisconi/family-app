import { Colors } from "@/src/constants/Colors";
import { headerHeight } from "@/src/constants/DefautConfig";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.surface.main,
        paddingTop: headerHeight,
    },
    contentContainer: {
        flex: 1,
        gap: Spacing['4xl'],
    },
});