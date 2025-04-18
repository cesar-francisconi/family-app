import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { ListMovieCardGroupProps } from './types';
import { ListMovieCard } from '../ListMovieCard';

export function ListMovieCardGroup(props: ListMovieCardGroupProps) {

    const { data, title, showTitle = true } = props;

    return (
        <View style={styles.mainContainer}>
            {showTitle && <Text
                style={styles.title}
            >
                {title}
            </Text>}

            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.container}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {

                            }}
                        >
                            <ListMovieCard
                                {...item}
                                fnIcon={() => {

                                }}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

