import {
    FlatList,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { ChipsCarouselProps } from './types';
import { Chip } from '../Chip';
import { useState } from 'react';
import { handleChipPress } from '@/src/helpers/handleChipPress';

export function ChipsCarousel(props: ChipsCarouselProps) {

    const {
        chips,
        chipsCarouselIndex,
        chipOptions,
        setActor,
        setGenre,
        setYear,
        setOrder,
    } = props;

    const [isActiveIndex, setIsActiveIndex] = useState(0);

    const handlePress = (item: string, index: number) => {
        handleChipPress({
            item,
            index,
            chipsCarouselIndex,
            setIsActiveIndex,
            setActor,
            setGenre,
            setYear,
            setOrder,
        });
    };

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={chips}
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainerStyle}
                renderItem={({ item, index }) => (
                    <TouchableOpacity activeOpacity={0.7} onPress={() => handlePress(item, index)}>
                        <Chip
                            text={item}
                            isActive={isActiveIndex === index}
                            borderRadius={chipOptions?.borderRadius}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
