import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { AddCommentProps } from './types';
import { BorderRadius } from '@/src/constants/BorderRadius';

export const addCommentHeight = 36;

export function AddComment(props: AddCommentProps) {

    const {
        text = 'Add a comment...',
        borderRadius = 'large',
        fnAddComment,
    } = props;

    const borderRadiusMap = {
        large: BorderRadius['2xl'],
        medium: BorderRadius['sm'],
        small: BorderRadius['xs'],
        none: BorderRadius['none'],
    };

    const radius = borderRadiusMap[borderRadius];

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.container, {
                height: addCommentHeight,
                borderRadius: radius,
            }]}
            onPress={fnAddComment}
        >
            <Text
                style={styles.text}
                numberOfLines={1}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
}

