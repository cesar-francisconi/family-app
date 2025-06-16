import {
    View,
} from 'react-native';
import { styles } from './styles';
import { DotsProps } from './types';
import { Colors } from '@/src/constants/Colors';

export function Dots(props: DotsProps) {

    const {
        length,
        selecteIndex,
    } = props;

    return (
        <View style={styles.container}>
            {Array.from({ length: length }).map((_, index) => {

                const backgroundColor = selecteIndex === index ? Colors.error.main : Colors.surface.on;

                return <View
                    key={index}
                    style={[styles.dot, {
                        backgroundColor,
                    }]}
                />
            })}
        </View>
    );
}

