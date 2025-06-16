import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: Spacing['lg'],
    },
    likeLottie: {
        width: 22,
        height: 28,
    },
    myListLottie: {
        width: 15.5,
        height: 15.5,
    },
});