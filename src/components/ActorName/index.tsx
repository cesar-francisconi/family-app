import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { ActorNameProps } from './types';
import { styles } from './styles';
import { getActorNameOpacity } from '@/src/helpers/getActorNameOpacity';

export const ActorName = React.memo((props: ActorNameProps) => {

    const {
        name,
        bgTransparent = true,
    } = props;

    const opacity = getActorNameOpacity(bgTransparent);

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