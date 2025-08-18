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
import { AnswerProps } from './types';
import { AvatarProps } from '../Avatar/types';
import { memo, useMemo } from 'react';

export const Answer = memo(function Answer(props: AnswerProps) {
    const {
        id,
        username,
        background,
        userId,
        time,
        avatar,
        answer,
        likes,
        isEdit,
        dislikes,
        answerUsernames,
        onMorePress,
    } = props;

    const getAvatarProps = useMemo((): AvatarProps =>
        avatar
            ? { mode: 'image', imageUrl: avatar, size: 'small' }
            : { mode: 'initial', initial: getInitialsFromUsername(username), size: 'small', background }, [avatar, username, background]);

    return (
        <View style={styles.commentContainer}>
            <Avatar {...getAvatarProps} />

            <View style={styles.content}>
                <View style={styles.headerAndReactions}>
                    <View style={styles.headerContent}>
                        <View style={styles.userInfoRow}>
                            <Text style={[styles.header, styles.username]}>{username}</Text>
                            <Text style={[styles.header, styles.separator]}>-</Text>
                            <Text style={[styles.header, styles.time]}>{formatTimeAgo(time)}</Text>
                            {isEdit && <Text style={[styles.header, styles.edit]}>{'(Editado)'}</Text>}
                        </View>

                        <ColoredMessage message={answer} answerUsernames={answerUsernames} />
                    </View>

                    <ReactionGroup
                        userId={userId}
                        likes={likes}
                        dislikes={dislikes}
                        answerId={id}
                        withLikeCount
                        username={username}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.moreButton} onPress={onMorePress}>
                <Icon name="Feather" icon="more-vertical" size="small" />
            </TouchableOpacity>
        </View>
    );
});
