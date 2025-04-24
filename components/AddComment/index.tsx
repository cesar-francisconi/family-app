import {
    Text,
    View,
    ViewProps,
} from 'react-native';
import { styles } from './styles';
import { AddCommentProps } from './types';
import { BorderRadius } from '@/constants/BorderRadius';

export function AddComment(props: AddCommentProps & Pick<ViewProps, 'style'>) {

    const { text = 'Add a comment...', borderRadius = 'large', style } = props;

    const borderRadiusMap = {
        large: BorderRadius['2xl'],
        medium: BorderRadius['sm'],
        small: BorderRadius['xs'],
        none: BorderRadius['none'],
    };

    const addCommentBorderRadius = borderRadiusMap[borderRadius];

    return (
        <View style={[styles.container, {
            borderRadius: addCommentBorderRadius,
        }, style]}>
            <Text
                style={styles.text}
                numberOfLines={1}
            >
                {text}
            </Text>
        </View>
    );
}

