import React from 'react';
import {
    Image,
    TouchableOpacity,
} from 'react-native';
import { ActorCardProps } from './types';
import { styles } from './styles';
import { ActorName } from '../ActorName';
import { getActorCardBorderValue } from '@/src/helpers/getActorCardBorderValue';

export const ActorCard = React.memo((props: ActorCardProps) => {

    const {
        name,
        avatar,
        borderRadius = 'medium',
        withStroke = true,
        actorNameOptions,
        fnActorCardPress,
    } = props;

    const borderWidth = getActorCardBorderValue('borderWidth', withStroke);
    const borderColor = getActorCardBorderValue('borderColor', withStroke);
    const radius = getActorCardBorderValue('borderRadius', borderRadius);

    return (
        <TouchableOpacity
            onPress={fnActorCardPress}
            style={
                [styles.card, {
                    borderWidth,
                    borderColor,
                    borderRadius: radius,
                }]}
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