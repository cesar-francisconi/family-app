import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { CommentsListProps } from './types';
import { UserComment } from '../UserComment';
import { AddCommentWithAvatar } from '../AddCommentWithAvatar';
import { Icon } from '../Icon';

export function CommentsList(props: CommentsListProps) {

    const { data, title = 'comments' } = props;

    return (
        <View style={styles.container}>
            <View
                style={styles.header}
            >
                <Text
                    style={styles.title}
                >
                    {title}
                </Text>
                <TouchableOpacity>
                    <Icon
                        name='AntDesign'
                        icon='close'
                        size='small'
                    />
                </TouchableOpacity>
            </View>

            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <UserComment
                            {...item}
                        />
                    );
                }}
            />

            <View
                style={styles.addCommentWithAvatar}
            >
                <AddCommentWithAvatar
                    avatarMode='initial'
                    avatarInitial='c'
                />
            </View>
        </View>
    );
}

