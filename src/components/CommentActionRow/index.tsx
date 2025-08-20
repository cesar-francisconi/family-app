import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { CommentProps } from './types';
import { AddCommentWithAvatar } from '../AddCommentWithAvatar';
import { getCurrentMovieComments } from '@/src/hook/useMovie';
import { getCommentActionRowBorderRadiusValue } from '@/src/helpers/getCommentActionRowBorderRadiusValue';
import { ActionDefaultOpacity } from '@/src/constants/Opacity';

export function CommentActionRow(props: CommentProps) {

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

    const radius = getCommentActionRowBorderRadiusValue(borderRadius);

    const resolveBorderWidth = withStroke ? 1 : undefined;

    return (
        <TouchableOpacity
            onPress={fnCommentActionRowPress}
            activeOpacity={ActionDefaultOpacity}
            style={[styles.container, {
                borderRadius: radius,
                borderWidth: resolveBorderWidth,
            }]}
        >
            {withTitle && (
                <View style={styles.header}>
                    <Text style={[styles.text, styles.title]} numberOfLines={1}>
                        {title}
                    </Text>
                    <Text style={[styles.text, styles.count]} numberOfLines={1}>
                        {commentCount}
                    </Text>
                </View>
            )}

            <AddCommentWithAvatar
                avatarOptions={avatarOptions}
                addCommentOptions={addCommentOptions}
            />
        </TouchableOpacity>
    );
}
