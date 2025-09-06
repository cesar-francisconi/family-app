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
import { getAuth } from "@react-native-firebase/auth";
import {
    doc,
    getDoc,
    getFirestore,
} from "@react-native-firebase/firestore";
import { User } from "../hook/useUser";

interface SubmitCommentOrAnswerProps {
    movieId: string;
    inputValue: string;
    pathname: AppRoutes;
    inputRef: React.RefObject<TextInput | null>;
    commentReplySheetOptions: CommentReplySheetOptions,
    bottomSheetRef: React.RefObject<BottomSheet | null>;
    resetInput: () => void;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
};

export const submitCommentOrAnswer = async (props: SubmitCommentOrAnswerProps) => {

    const {
        movieId,
        inputValue,
        pathname,
        inputRef,
        commentReplySheetOptions,
        bottomSheetRef,
        resetInput,
        setIsLoading,
    } = props;

    setIsLoading(true);

    const auth = getAuth();
    const user = auth.currentUser;
    const isComment = pathname === '/comments';
    const isAnswers = pathname === '/answers';

    if (!(user && user.uid)) return;

    const uid = user.uid;
    const db = getFirestore();
    const userRef = doc(db, 'users', uid as string);
    const userSnap = await getDoc(userRef);

    const data = userSnap.data() as Omit<User, 'id'>;

    if (!data) {
        console.log(`[DEBUG] User com ID ${uid} não encontrado.`);
        return;
    };

    const username = data.username;
    const background = data.background;
    const avatar = data.avatar;
    const userId = uid;

    if (commentReplySheetOptions.origin === 'isCommentAuthorizedUserActionsSheetEdit' || commentReplySheetOptions.origin === 'isSelectedParentCommentAuthorizedUserActionsSheetEdit') {
        await changeCommentById(inputValue);

        bottomSheetRef.current?.close();
        inputRef.current?.blur();
        setCommentReplySheet({ isOpen: false });
        resetInput();
        setIsLoading(false);

        return;
    };

    if (commentReplySheetOptions.origin === 'isAnswerAuthorizedUserActionsSheetEdit') {
        await changeAnswerById(inputValue);

        bottomSheetRef.current?.close();
        inputRef.current?.blur();
        setCommentReplySheet({ isOpen: false });
        resetInput();
        setIsLoading(false);

        return;
    };

    if (isComment) {
        await setComment(movieId, {
            username,
            avatar,
            userId,
            comment: inputValue,
        });
    } else if (isAnswers) {
        await setAnswer(movieId, {
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
    setIsLoading(false);
};