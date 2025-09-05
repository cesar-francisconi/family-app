import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { SearchHistoryProps } from './types';
import { Chip } from '../Chip';

export const SearchHistory = React.memo((props: SearchHistoryProps) => {

    const {
        withTitle = false,
        title = 'Title',
        searchHistory,
        chipOptions,
        fnSearchHistoryChip
    } = props;

    return (
        <View
            style={styles.container}
        >
            {withTitle && (<Text
                style={styles.title}
                numberOfLines={1}
            >
                {title}
            </Text>)}

            <View style={styles.searchHistoryContainer}>
                {searchHistory.map((item) => {
                    return (
                        <Chip
                            text={item}
                            key={item}
                            fnChipPress={() => fnSearchHistoryChip(item)}
                            {...chipOptions}
                        />
                    );
                })}
            </View>
        </View>
    );
});

