import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { InfoProps } from './types';

export function Info(props: InfoProps) {

    const { prop, propValue } = props;

    return (
        <View style={styles.container}>
            <Text
                style={[styles.text, styles.prop]}
            >
                {prop}:
            </Text>

            <Text
                numberOfLines={3}
                style={[styles.text, styles.propValue]}
            >
                {propValue}
            </Text>
        </View>
    );
}

