import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { create } from 'zustand';
import { useRouter } from "expo-router";
import { setCommentReplySheet } from "../hook/useCommentReplySheet";
import {
    CommentReplySheetOptions,
} from "../hook/useCommentReplySheet";
import {
    removeAnswerById,
    removeCommentById,
} from "../hook/useMovie";
import { setConfirmDeleteCommentModal } from './useConfirmDeleteCommentModal';
import Toast from 'react-native-toast-message';

export interface AuthorizedUserActionsSheetOptions {
    isOpen: boolean;
    origin?: 'isComment' | 'isSelectedParentComment' | 'isAnswer';
    param?: {
        replyTo?: string;
        editTo?: string;
        deleteTo?: string;
    };
};

interface InitialStateProps {
    options: AuthorizedUserActionsSheetOptions;
};

const initialState: InitialStateProps = {
    options: {
        isOpen: false,
        origin: undefined,
        param: undefined,
    },
};

export const useAuthorizedUserActionsSheet = create(() => initialState);

export const setAuthorizedUserActionsSheet = ({ isOpen, origin, param }: AuthorizedUserActionsSheetOptions) => useAuthorizedUserActionsSheet.setState(() => {
    return {
        options: {
            isOpen,
            origin,
            param,
        },
    };
});


interface CloseSheetProps {
    bottomSheetRef: React.RefObject<BottomSheetMethods | null>;
};

export const closeAuthorizedUserActionsSheet = ({
    bottomSheetRef,
}: CloseSheetProps) => {
    bottomSheetRef.current?.close();
    setAuthorizedUserActionsSheet({ isOpen: false });
};


interface HandleAuthorizedReplyProps {
    origin: AuthorizedUserActionsSheetOptions['origin'];
    param: AuthorizedUserActionsSheetOptions['param'];
};

export const handleAuthorizedReply = ({
    origin,
    param,
}: HandleAuthorizedReplyProps) => {
    const route = useRouter();

    const replyTo = param?.replyTo;

    switch (origin) {
        case 'isComment':
            route.push(`/(app)/(details)/(comments)/answers?commentId=${replyTo}&origin=isCommentAuthorizedUserActionsSheetReply`);
            break;
        case 'isSelectedParentComment':
            setCommentReplySheet({
                isOpen: true,
                origin: 'isSelectedParentCommentAuthorizedUserActionsSheetReply',
            });
            break;
        case 'isAnswer':
            setCommentReplySheet({
                isOpen: true,
                origin: 'isAnswerAuthorizedUserActionsSheetReply',
                param: { authorizedUserActionsSheetReply: replyTo },
            });
            break;
    };
};


interface HandleAuthorizedEditProps {
    origin: AuthorizedUserActionsSheetOptions['origin'];
    param: AuthorizedUserActionsSheetOptions['param'];
};

export const handleAuthorizedEdit = ({
    origin,
    param,
}: HandleAuthorizedEditProps) => {
    const editTo = param?.editTo;

    const baseConfig: CommentReplySheetOptions = {
        isOpen: true,
        param: { authorizedUserActionsSheetEdit: editTo },
    };

    switch (origin) {
        case 'isComment':
            setCommentReplySheet({
                ...baseConfig,
                origin: 'isCommentAuthorizedUserActionsSheetEdit',
            });
            break;
        case 'isSelectedParentComment':
            setCommentReplySheet({
                ...baseConfig,
                origin: 'isSelectedParentCommentAuthorizedUserActionsSheetEdit',
            });
            break;
        case 'isAnswer':
            setCommentReplySheet({
                ...baseConfig,
                origin: 'isAnswerAuthorizedUserActionsSheetEdit',
            });
            break;
    };
};

interface HandleAuthorizedDeleteProps {
    origin: AuthorizedUserActionsSheetOptions['origin'];
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const handleAuthorizedDelete = async ({
    origin,
    setIsLoading,
}: HandleAuthorizedDeleteProps) => {
    setIsLoading(true);
    const route = useRouter();

    switch (origin) {
        case 'isComment':
            await removeCommentById();
            break;
        case 'isSelectedParentComment':
            route.back();
            await removeCommentById();
            break;
        case 'isAnswer':
            await removeAnswerById();
            break;
    };

    setConfirmDeleteCommentModal({
        isOpen: false,
    });

    setIsLoading(false);
};
