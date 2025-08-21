import {
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";
import { Icon } from "../Icon";
import { styles } from "./styles";
import { CloseButtonProps } from "./types";
import { ActionDefaultOpacity } from "@/src/constants/Opacity";

export function CloseButton(props: CloseButtonProps & TouchableOpacityProps) {

    const {
        activeOpacity = ActionDefaultOpacity,
    } = props;

    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            style={styles.container}
            {...props}
        >
            <Icon
                name='AntDesign'
                icon='close'
            />
        </TouchableOpacity>
    );
}