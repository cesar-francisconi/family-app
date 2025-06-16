import {
    Text,
} from 'react-native';
import { styles } from './styles';
import { HeaderTitleProps } from './types';

export function HeaderTitle(props: HeaderTitleProps) {

    const { text } = props;

    return (
        <Text
            style={styles.text}
        >
            {text}
        </Text>
    );
}