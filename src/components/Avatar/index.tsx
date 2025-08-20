import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { AvatarProps } from './types';
import { styles } from './styles';
import { Font } from '@/src/constants/Font';
import { Colors } from '@/src/constants/Colors';

export const Avatar = React.memo((props: AvatarProps) => {

    const {
        mode = 'initial',
        initial = 'i',
        imageUrl,
        withStroke = false,
        size = 'large',
    } = props;

    const sizeMap = {
        large: 48,
        medium: 32,
        small: 26,
    };

    const initialFontMap = {
        large: StyleSheet.flatten(Font.headline.large),
        medium: StyleSheet.flatten(Font.headline.medium),
        small: StyleSheet.flatten(Font.label.small),
    };

    const initialFont = initialFontMap[size];
    const width = sizeMap[size];
    const height = sizeMap[size];
    const borderWidth = withStroke ? 1 : 0;

    return (
        <View
            style={[styles.container, {
                width,
                height,
                borderWidth,
                backgroundColor: background ?? Colors.surface.main,
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
});

