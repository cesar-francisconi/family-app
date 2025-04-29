import {
    View,
} from 'react-native';
import { InputTwoGroupProps } from './types';
import { styles } from './styles';

export function InputTwoGroup(props: InputTwoGroupProps) {

    const { firstInput, secondInput } = props;

    return (
        <View style={styles.container}>
            {firstInput}

            {secondInput}
        </View>
    );
}

