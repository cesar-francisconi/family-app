import { View } from "react-native";
import { styles } from "./styles";

export function Indicator() {

    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.indicator}
            />
        </View>
    );
}

