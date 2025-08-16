import {
    Dimensions,
    TouchableOpacity,
    View,
} from 'react-native';
import { Comment } from '@/src/components/Comment';
import { styles } from '@/src/screen/Comments/styles';
import {
    useLocalSearchParams,
    useRouter,
} from 'expo-router';
import {
    CommentsLocalSearchParams,
    CommentsProps,
} from '../../../../screen/Comments/types';
import { CommentReplyField } from '../../../../components/CommentReplyField';
import { setCommentReplySheet } from '@/src/hook/useCommentReplySheet';
import {
    useEffect,
    useMemo,
    useState,
} from 'react';
import { ActivityIndicator } from '@/src/components/ActivityIndicator';
import { setCurrentCommentId, setCurrentUserId, useMovies } from '@/src/hook/useMovie';
import { useDebounce } from '@/src/helpers/debounce';
import { getLoggedInUserId } from '@/src/hook/useUser';
import { openCommentActionsSheet } from '@/src/helpers/openCommentActionsSheet';
import { usePathName } from '@/src/hook/usePathname';
import { Colors } from '@/src/constants/Colors';
import { FlatList } from 'react-native-gesture-handler';

export const screenHeight = Dimensions.get('window').height;

const PAGE_SIZE = 5;

export default function Comments(props: CommentsProps) {

    const {

    } = props;

    const { debounce } = useDebounce();
    const loggedInUserId = useMemo(() => getLoggedInUserId(), []);
    const pathname = usePathName();
    const router = useRouter();

    const { movieId, origin } = useLocalSearchParams<CommentsLocalSearchParams>();

    const comments = useMovies((state) => state.currentMovieComments);

    const [visibleComments, setVisibleComments] = useState(5);

    useEffect(() => {
        if (origin === 'isAddComment') {
            setCommentReplySheet({
                isOpen: true,
                origin: 'isAddComment',
            });
        };
    }, [origin]);

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
                                onMorePress={() => debounce(() => openCommentActionsSheet({
                                    loggedInUserId,
                                    pathname,
                                    comment: item.comment,
                                    id: item.id,
                                    userId: item.userId,
                                }), 1000)}
                                handleAnswersPress={() => debounce(() => {
                                    setCurrentUserId(item.userId);
                                    setCurrentCommentId(item.id);

                                    router.push(`/(app)/(details)/(comments)/answers?commentId=${item.id}`);
                                }, 1000)}
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


