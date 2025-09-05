import { Colors } from "@/src/constants/Colors";
import { headerHeight } from "@/src/constants/DefautConfig";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.surface.main,
        borderTopWidth: 1,
        borderColor: Colors.outline.variant,
        paddingTop: headerHeight,
    },
});