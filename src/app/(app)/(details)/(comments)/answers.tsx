import { TouchableOpacity, View } from 'react-native';
import { useEffect, useMemo, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';

import { Comment } from '@/src/components/Comment';
import { Answer } from '@/src/components/Answer';
import CommentReplyField from '@/src/components/CommentReplyField';
import { ActivityIndicator } from '@/src/components/ActivityIndicator';

import { Colors } from '@/src/constants/Colors';
import { styles } from '@/src/screen/Answers/styles';
import { AnswersLocalSearchParams } from '@/src/screen/Answers/types';

import {
    getCommentById,
    getAnswerUsernamesByIds,
} from '@/src/hook/useMovie';
import { getLoggedInUserId } from '@/src/hook/useUser';
import { useDebounce } from '@/src/helpers/debounce';
import { openAnswerActionsSheet } from '@/src/helpers/openAnswerActionsSheet';
import { setCommentReplySheet } from '@/src/hook/useCommentReplySheet';
import { openCommentActionsSheet } from '@/src/helpers/openCommentActionsSheet';
import { usePathName } from '@/src/hook/usePathname';
import { FlatList } from 'react-native-gesture-handler';

const PAGE_SIZE = 2;

export default function Answers() {
    const { commentId, origin } = useLocalSearchParams<AnswersLocalSearchParams>();
    const comment = getCommentById(commentId);
    const { debounce } = useDebounce();
    const loggedInUserId = useMemo(() => getLoggedInUserId(), []);
    const pathname = usePathName();

    const [answerUsernames, setAnswerUsernames] = useState<string[] | null>(null);
    const [visibleAnswers, setVisibleAnswers] = useState(PAGE_SIZE * 2);
    const [showAnswers, setShowAnswers] = useState(false);

    // Set comment reply sheet on mount based on origin
    useEffect(() => {
        if (!origin) return;

        const validOrigins = [
            'isCommentCommentAction',
            'isCommentAuthorizedUserActionsSheetReply',
            'isCommentUnauthorizedUserActionsSheetReply',
        ];

        if (validOrigins.includes(origin)) {
            setCommentReplySheet({ isOpen: true, origin });
        }
    }, [origin]);

    // Fetch usernames once
    useEffect(() => {
        getAnswerUsernamesByIds().then(setAnswerUsernames);
    }, []);

    // Delay showing answers for smoother UX
    useEffect(() => {
        if (!comment) return;

        const timer = setTimeout(() => setShowAnswers(true), 1000);
        return () => clearTimeout(timer);
    }, [comment]);

    if (!comment) return <ActivityIndicator />;

    const loadMoreAnswers = () => {
        if (visibleAnswers < comment.answers.length) {
            setVisibleAnswers((prev) => prev + PAGE_SIZE);
        }
    };

    const renderAnswer = ({ item }: { item: typeof comment.answers[0] }) => (
        <Answer
            {...item}
            answerUsernames={answerUsernames}
            onMorePress={() =>
                debounce(() =>
                    openAnswerActionsSheet({
                        id: item.id,
                        answer: item.answer,
                        loggedInUserId,
                        userId: item.userId,
                        username: item.username,
                    }), 1000
                )
            }
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.answersContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[
                        styles.contentContainerStyle,
                        {
                            opacity: showAnswers ? 1 : 0,
                            pointerEvents: showAnswers ? 'auto' : 'none',
                        },
                    ]}
                    data={comment.answers.slice(0, visibleAnswers)}
                    keyExtractor={(item) => item.id}
                    renderItem={renderAnswer}
                    bounces={false}
                    overScrollMode="auto"
                    initialNumToRender={4}
                    maxToRenderPerBatch={2}
                    onEndReached={loadMoreAnswers}
                    onEndReachedThreshold={0.3}
                    ListHeaderComponent={
                        <View style={styles.selectedParentCommentContainer}>
                            <Comment
                                {...comment}
                                withAnswersText={false}
                                onMorePress={() => debounce(() => openCommentActionsSheet({
                                    loggedInUserId,
                                    pathname,
                                    comment: comment.comment,
                                    id: comment.id,
                                    userId: comment.userId,
                                }), 1000)}
                            />
                        </View>
                    }
                    ListFooterComponent={
                        visibleAnswers < comment.answers.length
                            ? () => <ActivityIndicator />
                            : undefined
                    }
                />

                {!showAnswers && (
                    <View style={styles.loadingOverlay}>
                        <ActivityIndicator />
                    </View>
                )}
            </View>

            <TouchableOpacity
                style={styles.commentReplyFieldContainer}
                onPress={() => setCommentReplySheet({ isOpen: true })}
            >
                <CommentReplyField
                    placeholder="Adicione uma resposta"
                    placeholderTextColor={Colors.surface.onVariant}
                    editable={false}
                />
            </TouchableOpacity>
        </View>
    );
}
