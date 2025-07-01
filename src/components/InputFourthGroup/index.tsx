import {
    View,
} from 'react-native';
import { styles } from './styles';
import { InputFourthGroupProps } from './types';

export function InputFourthGroup(props: InputFourthGroupProps) {

    const {
        firstInput,
        secondInput,
        tertiaryInput,
        fourthInput,
    } = props;

    return (
        <View style={styles.container}>
            {firstInput}

            {secondInput}

            {tertiaryInput}

            {fourthInput}
        </View>
    );
}

