import React from 'react';
import {
    Text,
    View,
    ViewProps
} from 'react-native';
import { styles } from './styles';
import { LabelAvatarProps } from './types';
import { Avatar } from '../Avatar';
import { resolveAvatarProps } from '@/src/helpers/resolveAvatarProps';
import { resolveLabelAvatarGapSize } from '@/src/helpers/resolveLabelAvatarGapSize';
import { resolveLabelAvatarStyle } from '@/src/helpers/resolveLabelAvatarStyle';

export const LabelAvatar = React.memo((props: LabelAvatarProps & Pick<ViewProps, 'style'>) => {

    const {
        avatarOptions,
        size = 'large',
        label = 'label',
        orientation = 'horizontal',
        style,
    } = props;

    const { flexDirection, fontSize } = resolveLabelAvatarStyle({ orientation, size });

    const gap = resolveLabelAvatarGapSize({ orientation, size });

    const avatarProps = resolveAvatarProps({ avatarOptions, size });

    return (
        <View style={[styles.container, { gap, flexDirection }, style]}>
            <Avatar {...avatarProps} />

            <Text style={[styles.label, fontSize]}>{label}</Text>
        </View>
    );
});
