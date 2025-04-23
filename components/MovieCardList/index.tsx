import { Dimensions, View, ScrollView, Text, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';
import { MovieCardListProps } from './types';
import { MovieCardProps } from '../MovieCard/types';
import { Spacing } from '@/constants/Spacing';
import { MovieCardFlex } from '../MovieCardFlex';

function chunkArray(array: MovieCardProps[], size: number): MovieCardProps[][] {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
        array.slice(i * size, i * size + size)
    );
}

const screenWidth = Dimensions.get('window').width;

export function MovieCardList(props: MovieCardListProps) {

    const {
        firstTitle = 'Title',
        secondTitle = 'Title',
        showTitle = false,
        data,
        gap = Spacing['lg'],
        numColumns = 3,
        movieCardFlexShowTitle,
        movieCardFlexBorderRadius
    } = props;

    const movieCardFlexProps = {
        borderRadius: movieCardFlexBorderRadius,
        showTitle: movieCardFlexShowTitle,
    };

    // set horizontal and vertical gap of movie card
    const movieCardgap = gap;
    // set horizontal padding of MovieCardList component
    const paddingHorizontal = Spacing['2xl'];
    // set movie card list column numbers
    const MovieCardListNumColumns = numColumns;

    const itemWidth = (screenWidth - paddingHorizontal * 2 - movieCardgap * (MovieCardListNumColumns - 1)) / MovieCardListNumColumns;

    const rows = chunkArray(data, MovieCardListNumColumns);

    const movieCardFlexstyle: StyleProp<ViewStyle> = { marginRight: movieCardgap, width: itemWidth };

    return (
        <View
            style={[styles.container, { paddingHorizontal }]}
        >
            <ScrollView contentContainerStyle={styles.container}>
                {showTitle && <View
                    style={styles.titleContainer}
                >
                    <Text
                        numberOfLines={1}
                        style={styles.firstTitle}
                    >
                        {firstTitle} <Text
                            style={styles.secondTitle}
                        >
                            {secondTitle}
                        </Text>
                    </Text>
                </View>}

                {rows.map((row, rowIndex) => {

                    const lineJustifyContent = row.length === MovieCardListNumColumns ? 'space-between' : 'flex-start';
                    const lineMarginBottom = rowIndex === rows.length - 1 ? 0 : movieCardgap;

                    return (
                        <View
                            key={rowIndex}
                            style={[
                                styles.row,
                                {
                                    justifyContent: lineJustifyContent,
                                    marginBottom: lineMarginBottom,

                                },
                            ]}
                        >
                            {row.map((item) => (
                                <MovieCardFlex
                                    key={item.id}
                                    style={movieCardFlexstyle}
                                    {...item}
                                    {...movieCardFlexProps}
                                />
                            ))}
                        </View>
                    );
                })
                }
            </ScrollView >
        </View >
    );
}
