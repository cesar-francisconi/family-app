import {
    Text,
    View,
} from 'react-native';
import { LabelCheckProps } from './types';
import { styles } from './styles';
import { Icon } from '../Icon';

export function LabelCheck(props: LabelCheckProps) {

    const {
        label,
        isChecked,
    } = props;

    const IsChecked = isChecked ? 'check-square' : 'square';

    return (
        <View style={styles.container}>
            <Icon
                name='Feather'
                icon={IsChecked}
                size='small'
            />

            <Text
                style={styles.label}
            >
                {label}
            </Text>
        </View>
    );
}