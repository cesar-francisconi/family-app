import { Text, View } from 'react-native';
import { styles } from './styles';
import { CommentProps } from './types';
import { AddCommentWithAvatar } from '../AddCommentWithAvatar';
import { BorderRadius } from '@/src/constants/BorderRadius';
import { getCurrentMovieCommentCount } from '@/src/hook/useMovie';

export function CommentActionRow(props: CommentProps) {

    const {
        avatarOptions,
        addCommentOptions,
        withTitle = true,
        title = 'Comments',
        borderRadius = 'medium',
        withStroke,
    } = props;

    const commentCount = getCurrentMovieCommentCount();

    const borderRadiusMap = {
        large: BorderRadius.md,
        medium: BorderRadius.sm,
        small: BorderRadius.xs,
        none: BorderRadius.none,
    };

    const radius = borderRadiusMap[borderRadius];
    const borderWidth = withStroke ? 1 : undefined;

    return (
        <View style={[styles.container, {
            borderRadius: radius,
            borderWidth,
        }]}>
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
        </View>
    );
}
