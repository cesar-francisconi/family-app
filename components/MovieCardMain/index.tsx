import {
    Dimensions,
    Image,
    StyleProp,
    View,
    ViewStyle,
} from 'react-native';
import { styles } from './styles';
import { MovieCardMainProps } from './types';
import { BorderRadius } from '@/constants/BorderRadius';
import { Colors } from '@/constants/Colors';

const screenWidth = Dimensions.get('window').width;

export function MovieCardMain(props: MovieCardMainProps) {

    const {
        size = 'large',
        borderRadius = 'medium',
        stroke = true,
        imageUrl,
    } = props;

    const sizeMap: {
        large: StyleProp<ViewStyle>;
        medium: StyleProp<ViewStyle>;
    } = {
        large: {
            width: 272,
            height: 368,
        },
        medium: {
            width: 224,
            height: 304,
        },
    };

    const borderRadiusMap = {
        large: BorderRadius['xl'],
        medium: BorderRadius['md'],
        small: BorderRadius['sm'],
        none: BorderRadius['none'],
    };

    const movieCardMainSize = sizeMap[size];
    const movieCardMainBorderRadius = borderRadiusMap[borderRadius];
    const movieCardMainStroke: StyleProp<ViewStyle> = stroke ? {
        borderWidth: 1,
        borderColor: Colors.outline.main,
    } : {
        borderWidth: undefined,
        borderColor: undefined,
    };

    const mainContainerWidth = screenWidth;

    return (
        <View
            style={[styles.mainContainer, {
                width: mainContainerWidth,
            }]}
        >
            <View style={[styles.container, movieCardMainSize, movieCardMainStroke, {
                borderRadius: movieCardMainBorderRadius,
            }]}>
                <Image
                    style={styles.image}
                    src={imageUrl}
                />
            </View>
        </View>
    );
}

