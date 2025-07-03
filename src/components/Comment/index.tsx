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

import { useRouter } from 'expo-router';
import { useDebounce } from '@/src/helpers/debounce';

import {
    setCurrentCommentId,
    setCurrentUserId,
} from '@/src/hook/useMovie';
import { formatTimeAgo } from '@/src/helpers/formatTimeAgo';
import { formatToK } from '@/src/helpers/formatTok';
import { getInitialsFromUsername } from '@/src/helpers/getInitialsFromUsername';
import { AvatarProps } from '../Avatar/types';
import { usePathName } from '@/src/hook/usePathname';
import { openCommentActionsSheet } from '@/src/helpers/openCommentActionsSheet';
import { getLoggedInUserId } from '@/src/hook/useUser';

export function Comment(props: UserCommentProps) {

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
    } = props;

    const loggedInUserId = getLoggedInUserId();
    const pathname = usePathName();
    const router = useRouter();
    const { debounce } = useDebounce(1000);

    const getAvatarProps = (): AvatarProps => (
        avatar
            ? { mode: 'image', imageUrl: avatar, size: 'small' }
            : { mode: 'initial', initial: getInitialsFromUsername(username), size: 'small' }
    );

    const handleAnswersPress = () => {
        setCurrentUserId(userId);
        setCurrentCommentId(id);

        router.push(`/(details)/(comments)/answers?commentId=${id}`);
    };

    const showAnswers = withAnswersText && answers.length > 0;

    if (!loggedInUserId) return;

    return (
        <View style={styles.commentContainer}>
            <Avatar {...getAvatarProps()} />

            <View style={styles.content}>
                <View style={styles.headerAndReactions}>
                    <View style={styles.headerContent}>
                        <View style={styles.userInfoRow}>
                            <Text style={[styles.header, styles.username]}>{username}</Text>
                            <Text style={[styles.header, styles.separator]}>-</Text>
                            <Text style={[styles.header, styles.time]}>{formatTimeAgo(time)}</Text>
                            {isEdit && <Text style={[styles.header, styles.edit]}>{'(Editado)'}</Text>}
                        </View>

                        <Text style={styles.commentText} numberOfLines={4}>
                            {comment}
                        </Text>
                    </View>

                    <ReactionGroup
                        userId={userId}
                        commentId={id}
                        likeCount={likes.length}
                        withLikeCount
                    />
                </View>

                {showAnswers && (
                    <TouchableOpacity onPress={() => debounce(handleAnswersPress)} style={styles.answersButton}>
                        <Text style={styles.answersCount}>{formatToK(answers.length)}</Text>
                        <Text style={styles.answersText}>{answersText}</Text>
                    </TouchableOpacity>
                )}
            </View>

            <TouchableOpacity style={styles.moreButton} onPress={() => debounce(() => openCommentActionsSheet({
                loggedInUserId,
                pathname,
                comment,
                id,
                userId,
            }))}>
                <Icon name="Feather" icon="more-vertical" size="small" />
            </TouchableOpacity>
        </View >
    );
}
