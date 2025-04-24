import {
    View,
} from 'react-native';
import { AddCommentWithAvatarProps } from './types';
import { styles } from './styles';
import { AddComment } from '../AddComment';
import { Avatar } from '../Avatar';

export function AddCommentWithAvatar(props: AddCommentWithAvatarProps) {

    const {
        avatarMode,
        avatarImageUrl,
        avatarStroke = false,
        avatarInitial,
        avatarSize = 'small',
        addCommentText,
        addCommentBorderRadius,
    } = props;

    const addCommentFlex = 1;

    return (
        <View style={styles.container}>
            {avatarMode === 'image' ? <Avatar
                mode={'image'}
                imageUrl={avatarImageUrl}
                stroke={avatarStroke}
                size={avatarSize}
            />
                :
                <Avatar
                    mode={'initial'}
                    initial={avatarInitial}
                    stroke={avatarStroke}
                    size={avatarSize}
                />
            }

            <AddComment
                text={addCommentText}
                borderRadius={addCommentBorderRadius}
                style={{
                    flex: addCommentFlex,
                }}
            />
        </View>
    );
}

