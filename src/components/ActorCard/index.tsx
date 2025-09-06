import React from 'react';
import {
    Image,
    TouchableOpacity,
} from 'react-native';
import { ActorCardProps } from './types';
import { styles } from './styles';
import { ActorName } from '../ActorName';
import { resolveActorCardStyle } from '@/src/helpers/resolveActorCardStyle';
import { ActionDefaultOpacity } from '@/src/constants/Opacity';

export const ActorCard = React.memo((props: ActorCardProps) => {

    const {
        name,
        avatar,
        borderRadius = 'medium',
        withStroke = true,
        actorNameOptions,
        fnActorCardPress,
    } = props;

    const cardStyle = resolveActorCardStyle(withStroke, borderRadius);

    return (
        <TouchableOpacity
            onPress={fnActorCardPress}
            activeOpacity={ActionDefaultOpacity}
            style={
                [styles.card, cardStyle]}
        >
            <Image
                style={styles.avatar}
                src={avatar}
            />

            <ActorName
                name={name}
                {...actorNameOptions}
            />
        </TouchableOpacity >
    );
});