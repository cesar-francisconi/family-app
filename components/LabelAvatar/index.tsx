import {
    StyleSheet,
    Text,
    View,
    ViewProps,
} from 'react-native';
import { styles } from './styles';
import { LabelAvatarProps } from './types';
import { Avatar } from '../Avatar';
import { Font } from '@/constants/Font';
import { Spacing } from '@/constants/Spacing';

export function LabelAvatar(props: LabelAvatarProps & Pick<ViewProps, 'style'>) {

    const {
        mode,
        imageUrl,
        initial,
        size = 'large',
        stroke,
        label,
        orientation = 'horizontal',
        style,
    } = props;

    const sizeMap = {
        large: StyleSheet.flatten(Font.label.extraLargeProminent),
        small: StyleSheet.flatten(Font.label.smallProminent),
    };

    const orientationMap = {
        horizontal: 'row',
        vertical: 'column',
    } as const;

    const gapMap = {
        horizontal: {
            large: Spacing.lg,
            small: Spacing.md,
        },
        vertical: {
            large: Spacing.sm,
            small: Spacing.xs,
        },
    } as const;

    const labelFont = sizeMap[size];
    const labelAvatarOrientation = orientationMap[orientation];
    const labelgap = gapMap[orientation][size];

    return (
        <View
            style={[styles.container, {
                gap: labelgap,
                flexDirection: labelAvatarOrientation,
            }, style]}
        >
            {mode === 'image' ? <Avatar
                mode={'image'}
                imageUrl={imageUrl}
                stroke={stroke}
                size={size}
            />
                :
                <Avatar
                    mode={'initial'}
                    initial={initial}
                    stroke={stroke}
                    size={size}
                />
            }

            <Text
                style={[styles.label, {
                    ...labelFont,
                }]}
            >
                {label}
            </Text>
        </View>
    );
}

