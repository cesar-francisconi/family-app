import {
    Image,
    View,
    ViewProps,
} from 'react-native';
import { ActorCardProps } from './types';
import { styles } from './styles';
import { ActorName } from '../ActorName';
import { Colors } from '@/constants/Colors';
import { BorderRadius } from '@/constants/BorderRadius';

export function ActorCard(props: ActorCardProps) {

    const {
        name,
        imageUrl,
        borderRadius = 'medium',
        stroke = true,
        actorNameBGTransparent = true,
    } = props;

    const borderRadiusMap = {
        none: BorderRadius.none,
        large: BorderRadius.md,
        medium: BorderRadius.sm,
        small: BorderRadius.xs,
    } as const;

    const actorCardStroke = stroke ? 0.5 : 0;
    const actorCardStrokeColor = stroke ? Colors.outline.main : undefined;
    const actorCardBorderRadius = borderRadiusMap[borderRadius];

    return (
        <View style={[styles.container, {
            borderWidth: actorCardStroke,
            borderColor: actorCardStrokeColor,
            borderRadius: actorCardBorderRadius,
        }]}
        >
            <Image
                style={styles.image}
                src={imageUrl}
            />

            <ActorName
                name={name}
                bgTransparent={actorNameBGTransparent}
            />
        </View>
    );
}