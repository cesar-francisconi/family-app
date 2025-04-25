import {
    Text,
    View,
} from 'react-native';
import { OrProps } from './types';
import { styles } from './styles';

export function Or(props: OrProps) {

    const { showText = true, text = 'or' } = props;

    return (
        <View style={styles.container}>
            {showText ? <>
                <View
                    style={styles.line}
                />

                <Text
                    style={styles.text}
                >
                    {text}
                </Text>

                <View
                    style={styles.line}
                />
            </>
                :
                <View
                    style={styles.line}
                />}
        </View>
    );
}

