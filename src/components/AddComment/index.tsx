import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { AddCommentProps } from './types';
import { getAddCommentBorderRadius } from '@/src/helpers/getAddCommentBorderRadius';
import { ActionDefaultOpacity } from '@/src/constants/Opacity';

export const addCommentHeight = 36;

export function AddComment(props: AddCommentProps) {

    const {
        placeholder = 'Add a comment...',
        borderRadius = 'large',
        fnAddCommentPress,
    } = props;

    const radius = getAddCommentBorderRadius(borderRadius);

    return (
        <TouchableOpacity
            activeOpacity={ActionDefaultOpacity}
            style={[styles.container, {
                height: addCommentHeight,
                borderRadius: radius,
            }]}
            onPress={fnAddCommentPress}
        >
            <Text
                style={styles.placeholder}
                numberOfLines={1}
            >
                {placeholder}
            </Text>
        </TouchableOpacity>
    );
}

