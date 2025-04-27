import {
    View,
} from 'react-native';
import { styles } from './styles';
import { DotsProps } from './types';
import { Colors } from '@/constants/Colors';

export function Dots(props: DotsProps) {

    const { length, selectedMovieCardIndex } = props;

    return (
        <View style={styles.container}>
            {Array.from({ length: length }).map((_, index) => {

                const dotBackgroundColor = selectedMovieCardIndex === index ? Colors.error.main : Colors.surface.on;

                return <View
                    key={index}
                    style={[styles.dot, {
                        backgroundColor: dotBackgroundColor,
                    }]}
                />
            })}
        </View>
    );
}

