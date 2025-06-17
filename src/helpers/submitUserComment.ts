import { TextInput } from "react-native";
import {
    changeAnswerById,
    changeCommentById,
    setAnswer,
    setComment,
} from "../hook/useMovie";
import BottomSheet from "@gorhom/bottom-sheet";
import {
    CommentReplySheetOptions,
    setCommentReplySheet,
} from "../hook/useCommentReplySheet";
import { AppRoutes } from "../hook/usePathname";

interface SubmitCommentOrAnswerProps {
    movieId: string;
    inputValue: string;
    pathname: AppRoutes;
    username: string;
    avatar: string;
    userId: string;
    inputRef: React.RefObject<TextInput | null>;
    commentReplySheetOptions: CommentReplySheetOptions,
    bottomSheetRef: React.RefObject<BottomSheet | null>;
    resetInput: () => void;
};

export const submitCommentOrAnswer = (props: SubmitCommentOrAnswerProps) => {

    const {
        movieId,
        inputValue,
        pathname,
        username,
        avatar,
        userId,
        inputRef,
        commentReplySheetOptions,
        bottomSheetRef,
        resetInput,
    } = props;

    const isComment = pathname === '/comment';
    const isAnswers = pathname === '/answers';

    if (commentReplySheetOptions.origin === 'isCommentAuthorizedUserActionsSheetEdit' || commentReplySheetOptions.origin === 'isSelectedParentCommentAuthorizedUserActionsSheetEdit') {
        changeCommentById(inputValue);

        bottomSheetRef.current?.close();
        inputRef.current?.blur();
        setCommentReplySheet({ isOpen: false });
        resetInput();

        return;
    };

    if (commentReplySheetOptions.origin === 'isAnswerAuthorizedUserActionsSheetEdit') {
        changeAnswerById(inputValue);

        bottomSheetRef.current?.close();
        inputRef.current?.blur();
        setCommentReplySheet({ isOpen: false });
        resetInput();

        return;
    };

    if (isComment) {
        setComment(movieId, {
            username,
            avatar,
            userId,
            message: inputValue,
        });
    } else if (isAnswers) {
        setAnswer(movieId, {
            username,
            avatar,
            userId,
            answer: inputValue,
        });
    };

    bottomSheetRef.current?.close();
    inputRef.current?.blur();
    setCommentReplySheet({ isOpen: false });
    resetInput();
};