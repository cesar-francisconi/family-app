import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { ActorNameProps } from './types';
import { styles } from './styles';
import { resolveActorNameOpacity } from '@/src/helpers/resolveActorNameOpacity';

export const ActorName = React.memo((props: ActorNameProps) => {

    const {
        name,
        bgTransparent = true,
    } = props;

    const opacity = resolveActorNameOpacity(bgTransparent);

    return (
        <View
            style={styles.container}
        >
            <View
                style={[styles.background, {
                    opacity,
                }]}
            />

            <Text
                style={styles.name}
                numberOfLines={1}
            >
                {name}
            </Text>
        </View>
    );
});