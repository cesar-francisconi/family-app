import {
    View,
} from 'react-native';
import { styles } from './styles';
import { VerticalButtonGroupProps } from './types';

export function VerticalButtonGroup(props: VerticalButtonGroupProps) {

    const { firstButton, secondButton } = props;

    return (
        <View style={styles.container}>
            {firstButton}

            {secondButton}
        </View>
    );
}

