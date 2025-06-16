import {
    Pressable,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { ReactionGroupProps } from './types';
import { Icon } from '../Icon';
import { formatToK } from '@/src/helpers/formatTok';
import {
    setCurrentCommentId,
    hasLoggedInUserLikedComment,
    hasLoggedInUserLikedAnswer,
    toggleCommentLikeForUser,
    toggleAnswerLikeForUser,
    toggleCommentDislikeForUser,
    toggleAnswerDislikeForUser,
    hasLoggedInUserDislikedComment,
    hasLoggedInUserDislikedAnswer,
} from '@/src/hook/useMovie';
import { useDebounce } from '@/src/helpers/debounce';
import {
    useRouter,
} from 'expo-router';
import { setCommentReplySheet } from '@/src/hook/useCommentReplySheet';
import { usePathName } from '@/src/hook/usePathname';
import { useUser } from '@/src/hook/useUser';
import LottieView from 'lottie-react-native';
import {
    useEffect,
    useRef,
} from 'react';

export function ReactionGroup(props: ReactionGroupProps) {

    const {
        commentId,
        answerId,
        likeCount,
        withLikeCount = false,
        username,
    } = props;

    const loggedInUserId = useUser((state) => state.id);
    const { debounce } = useDebounce(1000);
    const pathname = usePathName();
    const route = useRouter();
    const firstRunLike = useRef(true);
    const animationLikeRef = useRef<LottieView>(null);
    const animationDislikeRef = useRef<LottieView>(null);

    const isLiked = commentId
        ? hasLoggedInUserLikedComment(loggedInUserId, commentId)
        : answerId
            ? hasLoggedInUserLikedAnswer(loggedInUserId, answerId)
            : false;

    const isDisliked = commentId
        ? hasLoggedInUserDislikedComment(loggedInUserId, commentId)
        : answerId
            ? hasLoggedInUserDislikedAnswer(loggedInUserId, answerId)
            : false;

    const toggleLike = () => {
        if (commentId) toggleCommentLikeForUser(loggedInUserId, commentId);
        else if (answerId) toggleAnswerLikeForUser(loggedInUserId, answerId);
    };

    const toggleDislike = () => {
        if (commentId) toggleCommentDislikeForUser(loggedInUserId, commentId);
        else if (answerId) toggleAnswerDislikeForUser(loggedInUserId, answerId);
    };

    const onCommentPress = () => {
        const isComment = pathname === '/comment';
        const isSelectedParentComment = commentId && pathname === '/answers';
        const isAnswer = pathname === '/answers';

        if (isComment) {
            route.push(`/(details)/(comments)/answers?commentId=${commentId}&origin=isCommentCommentAction`)

            commentId && setCurrentCommentId(commentId);
        } else if (isSelectedParentComment) {
            setCommentReplySheet({
                isOpen: true,
                origin: 'isSelectedParentCommentCommentAction'
            });
        } else if (isAnswer) {
            setCommentReplySheet({
                isOpen: true,
                origin: 'isAnswerCommentAction',
                param: {
                    answerCommentAction: username,
                },
            });
        };
    };

    useEffect(() => {
        if (!animationLikeRef.current) return;

        if (firstRunLike.current) {
            animationLikeRef.current.play(isLiked ? 130 : 0, isLiked ? 130 : 0);
            firstRunLike.current = false;
        } else {
            animationLikeRef.current.play(isLiked ? 30 : 0, isLiked ? 130 : 0);
        }
    }, [isLiked]);

    useEffect(() => {
        if (!animationDislikeRef.current) return;

        if (isDisliked) {
            animationDislikeRef.current.play(130, 130);
            animationLikeRef.current?.play(0, 0);
        } else {
            animationDislikeRef.current.play(0, 0);
        }
    }, [isDisliked]);

    return (
        <View style={styles.container}>
            <View style={styles.likeContainer}>
                <Pressable style={styles.iconButton} onPress={toggleLike}>
                    <LottieView
                        resizeMode='cover'
                        ref={animationLikeRef}
                        autoPlay={false}
                        loop={false}
                        style={styles.lottie}
                        source={require('../../assets/like.json')}
                    />
                </Pressable>
                {withLikeCount && likeCount ? (
                    <Text style={styles.likeQuantity}>{formatToK(likeCount)}</Text>
                ) : null}
            </View>

            <Pressable style={[styles.iconButton, {
                transform: [
                    { rotate: '180deg' }
                ]
            }]} onPress={toggleDislike}>
                <LottieView
                    resizeMode='cover'
                    ref={animationDislikeRef}
                    autoPlay={false}
                    loop={false}
                    style={styles.lottie}
                    source={require('../../assets/like.json')}
                />
            </Pressable>

            <TouchableOpacity style={styles.iconButton} onPress={() => debounce(onCommentPress)}>
                <Icon name="MaterialCommunityIcons" icon="comment-outline" size="small" />
            </TouchableOpacity>
        </View>
    );
}
