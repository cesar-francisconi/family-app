import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { UserCommentProps } from './types';
import { ReactionGroup } from '../ReactionGroup';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { formatTimeAgo } from '@/src/helpers/formatTimeAgo';
import { formatToK } from '@/src/helpers/formatTok';
import { resolveShowAnswers } from '@/src/helpers/resolveShowAnswers';
import { useGetAvatarProps } from '@/src/hook/useGetAvatarProps';

export const Comment = React.memo((props: UserCommentProps) => {

    const {
        id,
        username,
        userId,
        time,
        avatar,
        comment,
        likes,
        answers,
        answersText = 'answers',
        withAnswersText = true,
        isEdit = false,
        dislikes,
        onMorePress,
        handleAnswersPress,
    } = props;

    const getAvatarProps = useGetAvatarProps({ avatar, username });

    const showAnswers = resolveShowAnswers({ withAnswersText, answers });

    const formattedTime = formatTimeAgo(time);

    const answersCount = formatToK(answers.length);

    return (
        <View style={styles.commentContainer}>
            <Avatar {...getAvatarProps} />

            <View style={styles.content}>
                <View style={styles.headerAndReactions}>
                    <View style={styles.headerContent}>
                        <View style={styles.userInfoRow}>
                            <Text style={[styles.header, styles.username]}>{username}</Text>
                            <Text style={[styles.header, styles.separator]}>-</Text>
                            <Text style={[styles.header, styles.time]}>{formattedTime}</Text>
                            {isEdit && <Text style={[styles.header, styles.edit]}>{'(Editado)'}</Text>}
                        </View>

                        <Text style={styles.commentText} numberOfLines={4}>
                            {comment}
                        </Text>
                    </View>

                    <ReactionGroup
                        userId={userId}
                        commentId={id}
                        likes={likes}
                        dislikes={dislikes}
                        withLikeCount
                    />
                </View>

                {showAnswers && (
                    <TouchableOpacity onPress={() => handleAnswersPress && handleAnswersPress(props)} style={styles.answersButton}>
                        <Text style={styles.answersCount}>{answersCount}</Text>
                        <Text style={styles.answersText}>{answersText}</Text>
                    </TouchableOpacity>
                )}
            </View>

            <TouchableOpacity style={styles.moreButton} onPress={() => onMorePress(props)}>
                <Icon name="Feather" icon="more-vertical" size="small" />
            </TouchableOpacity>
        </View >
    );
});
