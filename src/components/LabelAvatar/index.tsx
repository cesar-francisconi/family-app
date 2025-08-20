import {
    Text,
    View,
    ViewProps
} from 'react-native';
import { styles } from './styles';
import { LabelAvatarProps } from './types';
import { Avatar } from '../Avatar';
import { Font } from '@/src/constants/Font';
import { Spacing } from '@/src/constants/Spacing';
import { getInitialsFromUsername } from '@/src/helpers/getInitialsFromUsername';
import { AvatarProps } from '../Avatar/types';

export function LabelAvatar(props: LabelAvatarProps & Pick<ViewProps, 'style'>) {

    const {
        avatarOptions,
        size = 'large',
        label = 'label',
        orientation = 'horizontal',
        style,
    } = props;

    const fontSize = {
        large: Font.label.extraLargeProminent,
        small: Font.label.smallProminent,
    }[size];

    const flexDirection = orientation === 'vertical' ? 'column' : 'row';

    const gap = {
        horizontal: { large: Spacing.lg, small: Spacing.md },
        vertical: { large: Spacing.sm, small: Spacing.xs },
    }[orientation][size];

    let avatarProps: AvatarProps;

    if (avatarOptions.mode === 'image') {
        avatarProps = {
            mode: 'image',
            imageUrl: avatarOptions.imageUrl,
            size: size,
            withStroke: avatarOptions.withStroke,
        };
    } else {
        avatarProps = {
            mode: 'initial',
            initial: getInitialsFromUsername(avatarOptions.initial),
            size: size,
            withStroke: avatarOptions.withStroke,
        };
    }

    return (
        <View style={[styles.container, { gap, flexDirection }, style]}>
            <Avatar {...avatarProps} />

            <Text style={[styles.label, fontSize]}>{label}</Text>
        </View>
    );
}
