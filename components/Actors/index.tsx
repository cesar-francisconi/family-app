import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { ActorsCardProps } from './types';
import { styles } from './styles';
import { ActorCard } from '../ActorCard';

export function Actors(props: ActorsCardProps) {

    const {
        data,
        title = 'Actors',
        showTitle = true,
        actorCardStroke,
        actorNameBGTransparent,
    } = props;

    const actorCardProps = {
        stroke: actorCardStroke,
        actorNameBGTransparent,
    };

    return (
        <View
            style={styles.mainContainer}
        >
            {showTitle && <Text
                style={styles.title}
            >
                {title}
            </Text>}

            <FlatList
                horizontal
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.container}
                showsHorizontalScrollIndicator
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {

                            }}
                        >
                            <ActorCard
                                {...item}
                                {...actorCardProps}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}