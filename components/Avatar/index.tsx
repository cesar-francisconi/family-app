import {
    Image,
    StyleSheet,
    Text,
    View,
    ViewProps,
} from 'react-native';
import { AvatarProps } from './types';
import { styles } from './styles';
import { Font } from '@/constants/Font';

export function Avatar(props: AvatarProps) {

    const {
        mode,
        initial = '',
        imageUrl = '',
        stroke = true,
        size = 'large',
    } = props;

    const sizeMap = {
        large: 48,
        medium: 32,
        small: 20,
    } as const;

    const initialFontMap = {
        large: StyleSheet.flatten(Font.headline.large),
        medium: StyleSheet.flatten(Font.headline.medium),
        small: StyleSheet.flatten(Font.label.small),
    };

    const initialFont = initialFontMap[size];
    const avatarWidth = sizeMap[size];
    const avatarHeight = sizeMap[size];
    const avatarBorderWidth = stroke ? 1 : 0;

    return (
        <View style={[styles.container, {
            width: avatarWidth,
            height: avatarHeight,
            borderWidth: avatarBorderWidth,
        }]}>
            {mode === 'initial' ? <Text
                style={[styles.initial, {
                    ...initialFont,
                }]}
            >
                {initial}
            </Text>
                :
                <Image
                    style={styles.image}
                    src={imageUrl}
                />}
        </View>
    );
}

