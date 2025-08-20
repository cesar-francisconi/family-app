import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { AuthSuggestionProps } from './types';
import { styles } from './styles';

export function AuthSuggestion(props: AuthSuggestionProps) {

    const {
        message,
        messageColor,
        actionLabelColor,
        actionLabel,
        fnActionPress,
    } = props;

    return (
        <View style={styles.container}>
            <Text
                style={[styles.message, {
                    color: messageColor,
                }]}
                numberOfLines={2}
            >

                {message}
            </Text>

            <TouchableOpacity
                onPress={fnActionPress}
            >
                <Text
                    style={[styles.actionLabel, {
                        color: actionLabelColor,
                    }]}
                >
                    {actionLabel}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

