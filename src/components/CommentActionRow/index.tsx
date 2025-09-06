import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { CommentActionRowProps } from './types';
import { AddCommentWithAvatar } from '../AddCommentWithAvatar';
import { getCurrentMovieComments } from '@/src/hook/useMovie';
import { ActionDefaultOpacity } from '@/src/constants/Opacity';
import { resolveCommentActionRowStyle } from '@/src/helpers/resolveCommentActionRowStyle';

export function CommentActionRow(props: CommentActionRowProps) {

    const {
        avatarOptions,
        addCommentOptions,
        fnCommentActionRowPress,
        withTitle = true,
        title = 'Comments',
        borderRadius = 'medium',
        withStroke,
    } = props;

    const commentCount = getCurrentMovieComments().length;

    const containerStyle = resolveCommentActionRowStyle(borderRadius, withStroke);

    return (
        <TouchableOpacity
            onPress={fnCommentActionRowPress}
            activeOpacity={ActionDefaultOpacity}
            style={[styles.container, containerStyle]}
        >
            {withTitle && (<View style={styles.header}>
                <Text style={[styles.text, styles.title]} numberOfLines={1}>
                    {title}
                </Text>
                <Text style={[styles.text, styles.count]} numberOfLines={1}>
                    {commentCount}
                </Text>
            </View>)}

            <AddCommentWithAvatar
                avatarOptions={avatarOptions}
                addCommentOptions={addCommentOptions}
            />
        </TouchableOpacity>
    );
}
