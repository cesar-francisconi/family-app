import { Colors } from "@/src/constants/Colors";
import { headerHeight } from "@/src/constants/DefautConfig";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.surface.main,
        paddingTop: headerHeight,
    },
});