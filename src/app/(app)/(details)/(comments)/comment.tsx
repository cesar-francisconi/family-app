import {
    TouchableOpacity,
    View,
} from 'react-native';
import { Comment } from '@/src/components/Comment';
import { styles } from '@/src/screen/Comments/styles';
import {
    useLocalSearchParams,
} from 'expo-router';
import {
    CommentsLocalSearchParams,
    CommentsProps,
} from '../../../../screen/Comments/types';
import { Colors } from '../../../../constants/Colors';
import { CommentReplyField } from '../../../../components/CommentReplyField';
import { FlatList } from 'react-native-gesture-handler';
import { setCommentReplySheet } from '@/src/hook/useCommentReplySheet';
import {
    useEffect,
    useState,
} from 'react';
import { ActivityIndicator } from '@/src/components/ActivityIndicator';
import { Comment as TypeCommment } from '@/movie';
import { getCommentsById } from '@/src/hook/useMovie';

export default function Comments(props: CommentsProps) {

    const {

    } = props;

    const [comments, setComments] = useState<TypeCommment[] | null>(null);

    const { movieId, origin } = useLocalSearchParams<CommentsLocalSearchParams>();

    useEffect(() => {
        if (!movieId) return;

        const unsubscribe = getCommentsById(movieId, (newComments) => {
            setComments(newComments);
        });

        return () => {
            unsubscribe();
        };
    }, [movieId]);

    useEffect(() => {
        if (origin === 'isAddComment') {
            setCommentReplySheet({
                isOpen: true,
                origin: 'isAddComment',
            });
        };
    }, [origin]);

    if (!comments) return <ActivityIndicator />

    return (
        <View
            style={styles.container}
        >
            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={comments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <Comment
                            {...item}
                            answersText={'respostas'}
                        />
                    );
                }}
            />

            <TouchableOpacity
                style={styles.commentReplyFieldContainer}
                onPress={() => {
                    setCommentReplySheet({ isOpen: true });
                }}
            >
                <CommentReplyField
                    placeholder='Adicione um comentário'
                    placeholderTextColor={Colors.surface.onVariant}
                    editable={false}
                />
            </TouchableOpacity>
        </View>
    );
};


