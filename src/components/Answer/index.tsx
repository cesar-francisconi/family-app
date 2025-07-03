import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar';
import { ReactionGroup } from '../ReactionGroup';
import { ColoredMessage } from '../ColoredMessage';
import { Icon } from '../Icon';
import { formatTimeAgo } from '@/src/helpers/formatTimeAgo';
import { getInitialsFromUsername } from '@/src/helpers/getInitialsFromUsername';
import { useDebounce } from '@/src/helpers/debounce';
import { AnswerProps } from './types';
import { AvatarProps } from '../Avatar/types';
import { openAnswerActionsSheet } from '@/src/helpers/openAnswerActionsSheet';
import { getLoggedInUserId } from '@/src/hook/useUser';

export function Answer(props: AnswerProps) {
    const {
        id,
        username,
        userId,
        time,
        avatar,
        answer,
        likes,
        isEdit,
    } = props;

    const loggedInUserId = getLoggedInUserId();
    const { debounce } = useDebounce(1000);

    const getAvatarProps = (): AvatarProps =>
        avatar
            ? { mode: 'image', imageUrl: avatar, size: 'small' }
            : { mode: 'initial', initial: getInitialsFromUsername(username), size: 'small' };

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

                        <ColoredMessage message={answer} />
                    </View>

                    <ReactionGroup
                        userId={userId}
                        likeCount={likes.length}
                        answerId={id}
                        withLikeCount
                        username={username}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.moreButton} onPress={() => debounce(() => openAnswerActionsSheet({
                answer,
                id,
                loggedInUserId,
                userId,
                username,
            }))}>
                <Icon name="Feather" icon="more-vertical" size="small" />
            </TouchableOpacity>
        </View>
    );
}
