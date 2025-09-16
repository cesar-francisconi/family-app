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
} from '../../../../screen/Comments/types';
import CommentReplyField from '../../../../components/CommentReplyField';
import { setCommentReplySheet } from '@/src/hook/useCommentReplySheet';
import {
    useEffect,
    useState,
} from 'react';
import { ActivityIndicator } from '@/src/components/ActivityIndicator';
import { useMovies } from '@/src/hook/useMovie';
import { Colors } from '@/src/constants/Colors';
import { FlatList } from 'react-native-gesture-handler';
import { useCommentActions } from '@/src/hook/useCommentActions';

const PAGE_SIZE = 5;

export default function Comments() {

    const [visibleComments, setVisibleComments] = useState(5);

    const { origin } = useLocalSearchParams<CommentsLocalSearchParams>();

    const comments = useMovies((state) => state.currentMovieComments);

    useEffect(() => {
        if (origin === 'isAddComment') {
            setCommentReplySheet({
                isOpen: true,
                origin: 'isAddComment',
            });
        };
    }, [origin]);

    const { commentMorePress, commentAnswersPress } = useCommentActions();

    if (!comments) return <ActivityIndicator />

    const loadMoreAnswers = () => {
        if (visibleComments < comments.length) {
            setVisibleComments((prev) => prev + PAGE_SIZE);
        }
    };

    return (
        <View
            style={[styles.container, {
                // pointerEvents:'none'
            }]}
        >
            <View
                style={styles.commentsContainer}
            >
                {/*   hitSlop={10} // aumenta 10px em todas as direções */}
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainerStyle}
                    data={comments.slice(0, visibleComments)}
                    keyExtractor={(item) => item.id}
                    onEndReachedThreshold={0.3}
                    bounces={false}
                    overScrollMode={'auto'}
                    scrollEventThrottle={16}
                    renderItem={({ item }) => {
                        return (
                            <Comment
                                {...item}
                                answersText={'respostas'}
                                onMorePress={commentMorePress}
                                handleAnswersPress={commentAnswersPress}
                            />
                        );
                    }}
                    onEndReached={loadMoreAnswers}
                    ListFooterComponent={
                        visibleComments < comments.length
                            ? () => <ActivityIndicator />
                            : undefined
                    }
                />
            </View>

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
        </View >
    );
};


