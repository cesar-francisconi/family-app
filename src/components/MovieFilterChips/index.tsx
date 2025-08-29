import React, { useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    View,
} from 'react-native';
import { styles } from './styles';
import { MovieFilterChipsProps } from './types';
import { Chip } from '../Chip';
import { handleChipPress } from '@/src/helpers/handleChipPress';
import { screenWidth } from '@/src/constants/ScreenDimensions';

export const MovieFilterChips = React.memo((props: MovieFilterChipsProps) => {

    const {
        filterOptions,
        filterCategoryIndex,
        chipOptions,
        setActor,
        setGenre,
        setYear,
        setOrder,
        onFilterChipPressed,
    } = props;

    const [isActiveChip, setIsActiveChip] = useState(0);
    const [paddingRight, setPaddingRight] = useState(0);
    const movieFilterChipsRef = useRef<FlatList>(null);
    const lastItemPressed = useRef<string | null>(filterOptions[0]);

    return (
        <View style={styles.container}>
            <FlatList
                ref={movieFilterChipsRef}
                horizontal
                data={filterOptions}
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[styles.contentContainerStyle, {
                    paddingRight: screenWidth - (paddingRight + 16),
                }]}
                renderItem={({ item, index }) => (
                    <Chip
                        fnChipPress={() => {
                            movieFilterChipsRef.current?.scrollToIndex({ index: index, animated: true,viewOffset: 16 });

                            if (lastItemPressed.current === item) {

                            } else {
                                if (onFilterChipPressed) onFilterChipPressed();

                                lastItemPressed.current = item;
                            };

                            handleChipPress({
                                item,
                                index,
                                filterCategoryIndex,
                                setIsActiveChip,
                                setActor,
                                setGenre,
                                setYear,
                                setOrder,
                            });
                        }}
                        text={item}
                        key={item}
                        isActive={isActiveChip === index}
                        borderRadius={chipOptions?.borderRadius}
                        onLayout={(event) => {
                            if (index === filterOptions.length - 1) {
                                setPaddingRight(event.nativeEvent.layout.width);
                            };
                        }}
                    />
                )}
            />
        </View>
    );
});
