import {
    Image,
    Text,
    View,
} from 'react-native';
import {
    AvatarProps,
} from './types';
import { styles } from './styles';
import { getAvatarBackgroundColor } from '@/src/helpers/getAvatarBackgroundColor';
import { resolveAvatarBorderWidth } from '@/src/helpers/resolveAvatarBorderWidth';
import { getAvatarInitialFont } from '@/src/helpers/getAvatarInitialFont';
import { getAvatarDimension } from '@/src/helpers/getAvatarDimension';
import React from 'react';

export const Avatar = React.memo((props: AvatarProps) => {

    const {
        mode = 'initial',
        initial = 'i',
        imageUrl,
        withStroke = false,
        size = 'large',
    } = props;

    const avatarInitialFont = getAvatarInitialFont(size);
    const width = getAvatarDimension(size);
    const height = getAvatarDimension(size);
    const borderWidth = resolveAvatarBorderWidth(withStroke);

    return (
        <View
            style={[styles.container, {
                width,
                height,
                borderWidth,
                backgroundColor: getAvatarBackgroundColor(mode),
            }]}>
            {mode === 'initial' ? (<Text
                style={[styles.initial, {
                    ...avatarInitialFont,
                }]}
            >
                {initial}
            </Text>)
                :
                (<Image
                    style={styles.image}
                    src={imageUrl}
                />)}
        </View>
    );
});

