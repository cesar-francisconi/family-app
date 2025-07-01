import {
    TouchableOpacity,
    View,
} from 'react-native';
import { Comment } from '@/src/components/Comment';
import { useLocalSearchParams } from 'expo-router';
import {
    useEffect,
    useState,
} from 'react';
import { Colors } from '../../../../constants/Colors';
import { CommentReplyField } from '../../../../components/CommentReplyField';
import { FlatList } from 'react-native-gesture-handler';
import { Answer } from '@/src/components/Answer';
import { setCommentReplySheet } from '@/src/hook/useCommentReplySheet';
import {
    AnswersLocalSearchParams,
    AnswersProps,
} from '@/src/screen/Answers/types';
import { styles } from '@/src/screen/Answers/styles';
import { ActivityIndicator } from '@/src/components/ActivityIndicator';
import { Comment as TypeComment } from '@/movie';
import { getCommentById } from '@/src/hook/useMovie';

export default function Answers(props: AnswersProps) {

    const {

    } = props;

    const [comment, setComment] = useState<TypeComment | null>(null);

    const { commentId, origin } = useLocalSearchParams<AnswersLocalSearchParams>();

    useEffect(() => {
        if (origin === 'isCommentCommentAction') {
            setCommentReplySheet({
                isOpen: true,
                origin: 'isCommentCommentAction',
            });
        } else if (origin === 'isCommentAuthorizedUserActionsSheetReply' || origin === 'isCommentUnauthorizedUserActionsSheetReply') {
            setCommentReplySheet({
                isOpen: true,
                origin: origin,
            });
        };
    }, [origin]);

    useEffect(() => {
        const unsubscribe = getCommentById(commentId, (newComment) => {
            setComment(newComment);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    if (!comment) return <ActivityIndicator />

    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.selectedParentCommentContainer}
            >
                {comment && <Comment
                    {...comment}
                    withAnswersText={false}
                />}
            </View>

            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={comment.answers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <Answer
                            {...item}
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
                    placeholder='Adicione uma resposta'
                    placeholderTextColor={Colors.surface.onVariant}
                    editable={false}
                />
            </TouchableOpacity>
        </View>
    );
};


