import {
    Text,
    View,
} from 'react-native';
import { AuthSuggestionProps } from './types';
import { styles } from './styles';

export function AuthSuggestion(props: AuthSuggestionProps) {

    const { firstText, secondText } = props;

    return (
        <View style={styles.container}>
            <Text
                style={styles.firstText}
                numberOfLines={2}
            >
                {firstText} <Text
                    style={styles.secondText}
                >
                    {secondText}
                </Text>
            </Text>
        </View>
    );
}

