import { create } from 'zustand';
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useRouter } from "expo-router";
import {
    AuthorizedUserActionsSheetOptions,
} from "../hook/useAuthorizedUserActionsSheet";
import { setCommentReplySheet } from "../hook/useCommentReplySheet";

export interface UnauthorizedUserActionsSheetOptions {
    isOpen: boolean;
    origin?: 'isComment' | 'isSelectedParentComment' | 'isAnswer';
    param?: {
        replyTo?: string;
    };
};

interface InitialStateProps {
    options: UnauthorizedUserActionsSheetOptions;
};

const initialState: InitialStateProps = {
    options: {
        isOpen: false,
        origin: undefined,
        param: undefined,
    },
};

export const useUnauthorizedUserActionsSheet = create(() => initialState);

export const setUnauthorizedUserActionsSheet = ({ isOpen, origin, param }: UnauthorizedUserActionsSheetOptions) => useUnauthorizedUserActionsSheet.setState(() => {
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

export const closeUnauthorizedUserActionsSheet = ({
    bottomSheetRef,
}: CloseSheetProps) => {
    bottomSheetRef.current?.close();
    setUnauthorizedUserActionsSheet({ isOpen: false });
};


interface HandleunUnauthorizedReplyProps {
    bottomSheetRef: React.RefObject<BottomSheetMethods | null>;
    origin: AuthorizedUserActionsSheetOptions['origin'];
    param: AuthorizedUserActionsSheetOptions['param'];
};

export const handleUnauthorizedReply = ({
    bottomSheetRef,
    origin,
    param,
}: HandleunUnauthorizedReplyProps) => {
    const route = useRouter();

    const replyTo = param?.replyTo;

    switch (origin) {
        case 'isComment':
            route.push(`/(app)/(details)/(comments)/answers?commentId=${replyTo}&origin=isCommentUnauthorizedUserActionsSheetReply`);
            break;
        case 'isSelectedParentComment':
            setCommentReplySheet({
                isOpen: true,
                origin: 'isSelectedParentCommentUnauthorizedUserActionsSheetReply',
            });
            break;
        case 'isAnswer':
            setCommentReplySheet({
                isOpen: true,
                origin: 'isAnswerUnauthorizedUserActionsSheetReply',
                param: { unauthorizedUserActionsSheetReply: replyTo },
            });
            break;
    }

    closeUnauthorizedUserActionsSheet({
        bottomSheetRef,
    });
};