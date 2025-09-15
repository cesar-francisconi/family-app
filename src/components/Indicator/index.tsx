import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export const Indicator = React.memo(() => {

    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.indicator}
            />
        </View >
    );
});

