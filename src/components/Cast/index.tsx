import React from 'react';
import {
    FlatList,
    Text,
    View,
} from 'react-native';
import { CastProps } from './types';
import { styles } from './styles';
import { ActorCard } from '../ActorCard';
import { useRouter } from 'expo-router';

export const Cast = React.memo((props: CastProps) => {

    const {
        actors,
        title = 'Actors',
        withTitle = true,
        actorCardOptions,
        actorNameOptions,
    } = props;

    const route = useRouter();

    return (
        <View
            style={styles.container}
        >
            {withTitle && (<Text
                style={styles.title}
            >
                {title}
            </Text>)}

            <FlatList
                horizontal
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.cast}
                showsHorizontalScrollIndicator
                data={actors}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <ActorCard
                            {...item}
                            fnActorCardPress={() =>
                                route.push(`/actorDetails?actorId=${item.id}&actorName=${item.name}`)
                            }
                            {...actorCardOptions}
                            {...actorNameOptions}
                        />
                    );
                }}
            />
        </View>
    );
});