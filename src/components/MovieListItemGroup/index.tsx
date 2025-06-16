import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { MovieListItemGroupProps } from './types';
import { MovieListItem } from '../MovieListItem';
import { useRouter } from 'expo-router';

export function MovieListItemGroup(props: MovieListItemGroupProps) {

    const {
        data,
        withTitle = true,
        title,
    } = props;

    const route = useRouter();

    const borderTopWidth = withTitle ? 1 : undefined;

    return (
        <View style={styles.container}>
            {withTitle && <Text
                style={styles.title}
            >
                {title}
            </Text>}

            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                style={[styles.flatListContainer, {
                    borderTopWidth,
                }]}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {

                    const withBorderBottom = index !== data.length - 1;
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => route.push(`/(details)?movieId=${item.id}`)}
                        >
                            <MovieListItem
                                {...item}
                                withBorderBottom={withBorderBottom}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

