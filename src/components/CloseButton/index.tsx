import {
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";
import { Icon } from "../Icon";
import { styles } from "./styles";
import { CloseButtonProps } from "./types";

export function CloseButton(props: CloseButtonProps & TouchableOpacityProps) {

    const { } = props;

    return (
        <TouchableOpacity
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