import {
    Text,
    View,
} from 'react-native';
import { OrProps } from './types';
import { styles } from './styles';

export function Or(props: OrProps) {

    const {
        withText = true,
        text = 'or'
    } = props;

    return (
        <View style={styles.container}>
            <View style={styles.line} />

            {withText && (
                <>
                    <Text style={styles.text}>{text}</Text>
                    <View style={styles.line} />
                </>
            )}
        </View>
    );
}

