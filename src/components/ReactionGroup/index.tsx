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
    useFocusEffect,
    useRouter,
} from 'expo-router';
import { setCommentReplySheet } from '@/src/hook/useCommentReplySheet';
import { usePathName } from '@/src/hook/usePathname';
import LottieView from 'lottie-react-native';
import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

export function ReactionGroup(props: ReactionGroupProps) {
    const {
        commentId,
        answerId,
        likes,
        dislikes,
        withLikeCount = false,
        username,
    } = props;

    const [isLikedState, setIsLikedState] = useState(false);
    const [isDislikedState, setIsDislikedState] = useState(false);

    const { debounce } = useDebounce();
    const pathname = usePathName();
    const route = useRouter();
    const animationLikeRef = useRef<LottieView>(null);
    const animationDislikeRef = useRef<LottieView>(null);
    const delayedToggleLike = useRef<ReturnType<typeof setTimeout>>(null);
    const likesLength = useRef(likes.length);
    const firstRunLike = useRef(true);
    const firstRunDislike = useRef(true);
    const firstRunLikeFocus = useRef(true);
    const firstRunDislikeFocus = useRef(true);

    useEffect(() => {
        likesLength.current = likes.length;
    }, [likes]);

    const isLiked = commentId
        ? hasLoggedInUserLikedComment(likes)
        : answerId
            ? hasLoggedInUserLikedAnswer(likes)
            : false;

    const isDisliked = commentId
        ? hasLoggedInUserDislikedComment(dislikes)
        : answerId
            ? hasLoggedInUserDislikedAnswer(dislikes)
            : false;

    // ----- Animation Helpers -----
    const playLike = (from: number, to: number) => {
        animationLikeRef.current?.play(from, to);
    };

    const playDislike = (from: number, to: number) => {
        animationDislikeRef.current?.play(from, to);
    };

    const toggleLikeRemote = () => {
        if (commentId) toggleCommentLikeForUser(commentId);
        if (answerId) toggleAnswerLikeForUser(answerId);
    };

    const toggleDislikeRemote = () => {
        if (commentId) toggleCommentDislikeForUser(commentId);
        if (answerId) toggleAnswerDislikeForUser(answerId);
    };

    // ----- Like Toggle -----
    const toggleLike = () => {
        const likedNow = !isLiked;

        playLike(likedNow ? 40 : 0, likedNow ? 130 : 0);
        playDislike(0, 0);
        setIsLikedState(likedNow);
        setIsDislikedState(false);

        likesLength.current += likedNow ? 1 : -1;

        if (delayedToggleLike.current) clearTimeout(delayedToggleLike.current);
        delayedToggleLike.current = setTimeout(toggleLikeRemote, 100);
    };

    // ----- Dislike Toggle -----
    const toggleDislike = () => {
        const dislikedNow = !isDisliked;

        playDislike(dislikedNow ? 130 : 0, dislikedNow ? 130 : 0);
        playLike(0, 0);
        setIsDislikedState(dislikedNow);
        setIsLikedState(false);

        if (isLikedState && !isDislikedState) likesLength.current -= 1;

        if (delayedToggleLike.current) clearTimeout(delayedToggleLike.current);
        delayedToggleLike.current = setTimeout(toggleDislikeRemote, 100);
    };

    const onCommentPress = () => {
        const isComment = pathname === '/comments';
        const isSelectedParentComment = commentId && pathname === '/answers';
        const isAnswer = pathname === '/answers';

        if (isComment) {
            route.push(
                `/(app)/(details)/(comments)/answers?commentId=${commentId}&origin=isCommentCommentAction`
            );
            commentId && setCurrentCommentId(commentId);
        } else if (isSelectedParentComment) {
            setCommentReplySheet({
                isOpen: true,
                origin: 'isSelectedParentCommentCommentAction',
            });
        } else if (isAnswer) {
            setCommentReplySheet({
                isOpen: true,
                origin: 'isAnswerCommentAction',
                param: {
                    answerCommentAction: username,
                },
            });
        }
    };

    // ----- Initial Like Animation -----
    useEffect(() => {
        if (!animationLikeRef.current || !firstRunLike.current) return;

        setIsLikedState(isLiked);
        playLike(isLiked ? 130 : 0, isLiked ? 130 : 0);
        firstRunLike.current = false;
    }, [isLiked]);

    // ----- Initial Dislike Animation -----
    useEffect(() => {
        if (!animationDislikeRef.current || !firstRunDislike.current) return;

        setIsDislikedState(isDisliked);
        playDislike(isDisliked ? 130 : 0, isDisliked ? 130 : 0);
        playLike(0, 0);
        firstRunDislike.current = false;
    }, [isDisliked]);

    // ----- Focus Effect: Atualiza animação ao focar -----
    useFocusEffect(
        useCallback(() => {
            if (!animationLikeRef.current || !animationDislikeRef.current) return;
            if (!firstRunLikeFocus.current || !firstRunDislikeFocus.current) return;

            if (isLiked) {
                playLike(130, 130);
                playDislike(0, 0);
            } else {
                playLike(0, 0);
            }

            if (isDisliked) {
                playDislike(130, 130);
                playLike(0, 0);
            } else {
                playDislike(0, 0);
            }

            setIsLikedState(isLiked);
            setIsDislikedState(isDisliked);
            firstRunLikeFocus.current = false;
            firstRunDislikeFocus.current = false;
        }, [isLiked, isDisliked])
    );

    // ----- Focus Effect: Reset ao sair da tela -----
    useFocusEffect(
        useCallback(() => {
            return () => {
                firstRunLikeFocus.current = true;
                firstRunDislikeFocus.current = true;
            };
        }, [])
    );

    // ----- Limpeza de timeout -----
    useEffect(() => {
        return () => {
            if (delayedToggleLike.current) clearTimeout(delayedToggleLike.current);
        };
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.likeContainer}>
                <Pressable
                    style={styles.iconButton}
                    onPress={() => debounce(toggleLike, 100)}
                >
                    <LottieView
                        resizeMode="cover"
                        ref={animationLikeRef}
                        autoPlay={false}
                        loop={false}
                        style={styles.lottie}
                        source={require('../../assets/like.json')}
                    />
                </Pressable>
                {withLikeCount && likes?.length >= 0 && (
                    <Text style={styles.likeQuantity}>
                        {formatToK(likesLength.current)}
                    </Text>
                )}
            </View>

            <Pressable
                style={[styles.iconButton, { transform: [{ rotate: '180deg' }] }]}
                onPress={() => debounce(toggleDislike, 100)}
            >
                <LottieView
                    resizeMode="cover"
                    ref={animationDislikeRef}
                    autoPlay={false}
                    loop={false}
                    style={styles.lottie}
                    source={require('../../assets/like.json')}
                />
            </Pressable>

            <TouchableOpacity
                style={styles.iconButton}
                onPress={() => debounce(onCommentPress, 1000)}
            >
                <Icon
                    name="MaterialCommunityIcons"
                    icon="comment-outline"
                    size="small"
                />
            </TouchableOpacity>
        </View>
    );
}