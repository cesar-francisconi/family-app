import {
    FlatList,
    Text,
    View,
} from 'react-native';
import { CastProps } from './types';
import { styles } from './styles';
import { ActorCard } from '../ActorCard';
import { useRouter } from 'expo-router';

export function Cast(props: CastProps) {

    const {
        data,
        title = 'Actors',
        withTitle = true,
        actorCardOptions,
        actorNameOptions,
    } = props;

    const route = useRouter();

    return (
        <View
            style={styles.mainContainer}
        >
            {withTitle && <Text
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
                        <ActorCard
                            {...item}
                            fnActorCardPress={() => route.push(`/actorDetails?actorId=${item.id}&actorName=${item.name}`)}
                            {...actorCardOptions}
                            {...actorNameOptions}
                        />
                    );
                }}
            />
        </View>
    );
}