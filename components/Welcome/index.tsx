
import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { WelcomeProps } from './types';

// example to break line: firstText={'Bem-vindo(a) ao' + '\n' + 'App Family!'}

export function Welcome(props: WelcomeProps) {

    const { firstText, secondText } = props;

    return (
        <View style={styles.container}>
            <Text
                style={styles.firstText}
            >
                {firstText}
            </Text>

            <Text
                style={styles.secondText}
            >
                {secondText}
            </Text>
        </View>
    );
}

