import {
    Text,
    View,
} from 'react-native';
import { LabelCheckProps } from './types';
import { styles } from './styles';
import { Icon } from '../Icon';

export function LabelCheck(props: LabelCheckProps) {

    const { label, checked } = props;

    const isChecked = checked ? 'check-square' : 'square';

    return (
        <View style={styles.container}>
            <Icon
                name='Feather'
                icon={isChecked}
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