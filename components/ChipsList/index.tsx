import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { ChipsListProps } from './types';
import { Chip } from '../Chip';
import { ChipProps } from '../Chip/types';

export function ChipsList(props: ChipsListProps) {

    const { showTitle = false, title = 'Title', data, chipActive, chipBorderRadius } = props;

    const chipProps: Omit<ChipProps, 'text'> = {
        borderRadius: chipBorderRadius,
        active: chipActive,
    };

    return (
        <View
            style={styles.mainContainer}
        >
            {showTitle && <Text
                style={styles.title}
                numberOfLines={1}
            >
                {title}
            </Text>}

            <View style={styles.container}>
                {data.map((item) => {
                    return (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => { }}
                        >
                            <Chip
                                key={item}
                                text={item}
                                {...chipProps}
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

