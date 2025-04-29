import {
    View,
} from 'react-native';
import { styles } from './styles';
import { InputThreeGroupProps } from './types';

export function InputThreeGroup(props: InputThreeGroupProps) {

    const { firstInput, secondInput, tertiaryInput } = props;

    return (
        <View style={styles.container}>
            {firstInput}

            {secondInput}

            {tertiaryInput}
        </View>
    );
}

