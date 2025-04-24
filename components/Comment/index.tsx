import {
    StyleProp,
    Text,
    View,
    ViewStyle,
} from 'react-native';
import { styles } from './styles';
import { CommentProps } from './types';
import { AddCommentWithAvatar } from '../AddCommentWithAvatar';
import { Colors } from '@/constants/Colors';
import { BorderRadius } from '@/constants/BorderRadius';

export function Comment(props: CommentProps) {

    const {
        avatarMode,
        avatarImageUrl,
        avatarInitial,
        addCommentText,
        addCommentBorderRadius,
        avatarSize,
        avatarStroke,
        showComments = true,
        commentTitle = 'Comments',
        commentsNumbers = 0,
        borderRadius = 'medium',
        stroke,
    } = props;

    const commentOutline: StyleProp<ViewStyle> = stroke ?
        {
            borderWidth: 1,
            borderColor: Colors.outline.main,
        }
        :
        {
            borderWidth: undefined,
            borderColor: undefined,
        };

    const borderRadiusMap = {
        large: BorderRadius['md'],
        medium: BorderRadius['sm'],
        small: BorderRadius['xs'],
        none: BorderRadius['none'],
    };

    const commentBorderRadius = borderRadiusMap[borderRadius];

    return (
        <View style={[styles.container, commentOutline, {
            borderRadius: commentBorderRadius,
        }]}>
            {showComments && <View
                style={styles.commentsContainer}
            >
                <Text
                    style={[styles.text, styles.comments]}
                    numberOfLines={1}
                >
                    {commentTitle}
                </Text>

                <Text
                    style={[styles.text, styles.commentsNumbers]}
                    numberOfLines={1}
                >
                    {commentsNumbers}
                </Text>
            </View>}

            {avatarMode === 'image' ? <AddCommentWithAvatar
                avatarMode='image'
                avatarImageUrl={avatarImageUrl}
                addCommentText={addCommentText}
                addCommentBorderRadius={addCommentBorderRadius}
                avatarSize={avatarSize}
                avatarStroke={avatarStroke}
            />
                :
                <AddCommentWithAvatar
                    avatarMode='initial'
                    avatarInitial={avatarInitial}
                    addCommentText={addCommentText}
                    addCommentBorderRadius={addCommentBorderRadius}
                    avatarSize={avatarSize}
                    avatarStroke={avatarStroke}
                />}
        </View>
    );
}

