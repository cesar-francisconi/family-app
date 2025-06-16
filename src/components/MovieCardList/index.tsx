import {
    Dimensions,
    View,
    ScrollView,
    Text,
} from 'react-native';
import { styles } from './styles';
import { MovieCardListProps } from './types';
import { Spacing } from '@/src/constants/Spacing';
import { MovieCardFlex } from '../MovieCardFlex';
import { chunkArray } from '@/src/helpers/chunkArray';
import { useRouter } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

export function MovieCardList(props: MovieCardListProps) {

    const {
        data,
        gap = Spacing['xl'],
        numColumns = 3,
        movieCardFlexWithTitle = false,
        movieCardFlexBorderRadius,
        withTitle,
        firstTitle,
        secondTitle,
    } = props;

    const router = useRouter();

    const paddingHorizontal = Spacing['2xl'];
    const cardWidth = (screenWidth - paddingHorizontal * 2 - gap * (numColumns - 1)) / numColumns;
    const rows = chunkArray(data, numColumns);

    return (
        <View style={[styles.container, { paddingHorizontal }]}>
            {withTitle && (<View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.firstTitle}>
                    {firstTitle}{' '}
                    <Text style={styles.secondTitle}>
                        {secondTitle}
                    </Text>
                </Text>
            </View>)}

            <ScrollView
                style={styles.scrollViewContainer}
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false}
            >
                {rows.map((row, rowIndex) => {

                    const justifyContent = row.length === numColumns ? 'space-between' : 'flex-start';
                    const marginBottom = rowIndex === rows.length - 1 ? 0 : gap;

                    return (
                        <View
                            key={rowIndex}
                            style={{
                                ...styles.row,
                                justifyContent,
                                marginBottom,
                            }}
                        >
                            {row.map((movie) => (
                                <MovieCardFlex
                                    key={movie.id}
                                    {...movie}
                                    onPress={() => router.push(`/(details)?movieId=${movie.id}`)}
                                    style={{ width: cardWidth, marginRight: gap }}
                                    borderRadius={movieCardFlexBorderRadius}
                                    withTitle={movieCardFlexWithTitle}
                                />
                            ))}
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}
