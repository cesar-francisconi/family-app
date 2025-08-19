import React from 'react';
import {
    Image,
    TouchableOpacity,
} from 'react-native';
import { ActorCardProps } from './types';
import { styles } from './styles';
import { ActorName } from '../ActorName';
import { Colors } from '@/src/constants/Colors';
import { BorderRadius } from '@/src/constants/BorderRadius';

export const ActorCard = React.memo((props: ActorCardProps) => {

    const {
        name,
        avatar,
        borderRadius = 'medium',
        withStroke = true,
        actorNameOptions,
        fnActorCardPress,
    } = props;

    const borderRadiusMap = {
        none: BorderRadius.none,
        large: BorderRadius.md,
        medium: BorderRadius.sm,
        small: BorderRadius.xs,
    };

    const borderWidth = withStroke ? 0.5 : 0;
    const borderColor = withStroke ? Colors.outline.main : undefined;
    const radius = borderRadiusMap[borderRadius];

    return (
        <TouchableOpacity
            onPress={fnActorCardPress}
            style={
                [styles.container, {
                    borderWidth,
                    borderColor,
                    borderRadius: radius,
                }]}
        >
            <Image
                style={styles.image}
                src={avatar}
            />

            <ActorName
                name={name}
                {...actorNameOptions}
            />
        </TouchableOpacity >
    );
});