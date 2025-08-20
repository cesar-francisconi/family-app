import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { AuthSuggestionProps } from './types';
import { styles } from './styles';
import { Colors } from '@/src/constants/Colors';
import { ActionDefaultOpacity } from '@/src/constants/Opacity';

export function AuthSuggestion(props: AuthSuggestionProps) {

    const {
        message,
        messageColor = Colors.surface.on,
        actionLabelColor = Colors.primary.main,
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
                activeOpacity={ActionDefaultOpacity}
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

