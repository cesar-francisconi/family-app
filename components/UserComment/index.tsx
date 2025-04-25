import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { UserCommentProps } from './types';
import { ReactionGroup } from '../ReactionGroup';
import { Avatar } from '../Avatar';
import { formatTimeAgo } from '@/helpers/formatTimeAgo';
import { formatToK } from '@/helpers/formatTok';
import { Icon } from '../Icon';

export function UserComment(props: UserCommentProps) {

    const {
        username,
        comment,
        userImageUrl,
        time,
        answersNumber,
        answersText = 'answers',
    } = props;

    '16x16x32'

    return (
        <View
            style={styles.mainContainer}
        >
            {userImageUrl ? <Avatar
                mode='image'
                imageUrl={userImageUrl}
                size='small'
            />
                :
                <Avatar
                    mode='initial'
                    initial={username[1]}
                    size='small'
                />}

            <View style={styles.container}>
                <View
                    style={styles.reactionGroupAndCommentAndUsernameContainer}
                >
                    <View
                        style={styles.commentAndUsernameContainer}
                    >
                        <View
                            style={styles.usernameContainer}
                        >
                            <Text
                                style={[styles.header, styles.username]}
                            >
                                {username}
                            </Text>

                            <Text
                                style={[styles.header, styles.hyphen]}
                            >
                                -
                            </Text>

                            <Text
                                style={[styles.header, styles.time]}
                            >
                                {formatTimeAgo(time)}
                            </Text>
                        </View>

                        <Text
                            style={styles.comment}
                            numberOfLines={4}
                        >
                            {comment}
                        </Text>
                    </View>

                    <ReactionGroup />
                </View>

                <View
                    style={styles.answersContainer}
                >
                    <Text
                        style={styles.answersNumber}
                    >
                        {formatToK(answersNumber)}
                    </Text>
                    <Text
                        style={styles.answers}
                    >
                        {answersText}
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => { }}
            >
                <Icon
                    name='Feather'
                    icon='more-vertical'
                    size='small'
                />
            </TouchableOpacity>
        </View>
    );
}

