import {
    FlatList,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { ChipsCarouselProps } from './types';
import { Chip } from '../Chip';
import { useState } from 'react';

export function ChipsCarousel(props: ChipsCarouselProps) {

    const [activedChip, setactivedChip] = useState(0);

    const { chips, chipBorderRadius } = props;
    const chipProps = {
        borderRadius: chipBorderRadius,
    };

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={chips}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                setactivedChip(index);
                            }}
                        >
                            <Chip
                                key={item}
                                text={item}
                                active={activedChip === index}
                                {...chipProps}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

