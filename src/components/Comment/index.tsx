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
import { getInitialsFromUsername } from '@/src/helpers/getInitialsFromUsername';
import { AvatarProps } from '../Avatar/types';
import {
    memo,
    useMemo,
} from 'react';

export function Comment(props: UserCommentProps) {

    const {
        id,
        username,
        userId,
        time,
        avatar,
        comment,
        background,
        likes,
        answers,
        answersText = 'answers',
        withAnswersText = true,
        isEdit = false,
        dislikes,
        onMorePress,
        handleAnswersPress,
    } = props;

    const getAvatarProps = useMemo((): AvatarProps =>
        avatar
            ? { mode: 'image', imageUrl: avatar, size: 'small' }
            : { mode: 'initial', initial: getInitialsFromUsername(username), size: 'small', background }, [avatar, username, background]);

    const showAnswers = useMemo(() => withAnswersText && answers.length > 0, [withAnswersText, answers.length]);

    const formattedTime = useMemo(() => formatTimeAgo(time), [time]);
    const answersCount = useMemo(() => formatToK(answers.length), [answers]);

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
                    <TouchableOpacity onPress={handleAnswersPress} style={styles.answersButton}>
                        <Text style={styles.answersCount}>{answersCount}</Text>
                        <Text style={styles.answersText}>{answersText}</Text>
                    </TouchableOpacity>
                )}
            </View>

            <TouchableOpacity style={styles.moreButton} onPress={onMorePress}>
                <Icon name="Feather" icon="more-vertical" size="small" />
            </TouchableOpacity>
        </View >
    );
};
