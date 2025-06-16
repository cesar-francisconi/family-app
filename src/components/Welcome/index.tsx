import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { WelcomeProps } from './types';

export function Welcome(props: WelcomeProps) {

    const { title, description } = props;

    return (
        <View style={styles.container}>
            <Text
                style={styles.title}
            >
                {title}
            </Text>

            <Text
                style={styles.description}
            >
                {description}
            </Text>
        </View>
    );
}

