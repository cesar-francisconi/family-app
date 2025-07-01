import { useEffect } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { CommentReplySheetOptions } from './useCommentReplySheet';

interface Props {
    commentReplySheetOptions: CommentReplySheetOptions;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    bottomSheetRef: React.RefObject<BottomSheetMethods | null>;
}

// Tipagem das possíveis origens
type OriginType =
    | 'isAnswerCommentAction'
    | 'isAnswerAuthorizedUserActionsSheetReply'
    | 'isCommentAuthorizedUserActionsSheetEdit'
    | 'isSelectedParentCommentAuthorizedUserActionsSheetEdit'
    | 'isAnswerAuthorizedUserActionsSheetEdit'
    | 'isAnswerUnauthorizedUserActionsSheetReply';

const originMap: Record<OriginType, keyof NonNullable<CommentReplySheetOptions['param']>> = {
    isAnswerCommentAction: 'answerCommentAction',
    isAnswerAuthorizedUserActionsSheetReply: 'authorizedUserActionsSheetReply',
    isCommentAuthorizedUserActionsSheetEdit: 'authorizedUserActionsSheetEdit',
    isSelectedParentCommentAuthorizedUserActionsSheetEdit: 'authorizedUserActionsSheetEdit',
    isAnswerAuthorizedUserActionsSheetEdit: 'authorizedUserActionsSheetEdit',
    isAnswerUnauthorizedUserActionsSheetReply: 'unauthorizedUserActionsSheetReply',
};

export function useExpandCommentReplyFieldBottomSheetOnOpen({
    commentReplySheetOptions,
    setInputValue,
    bottomSheetRef,
}: Props) {
    useEffect(() => {
        if (!commentReplySheetOptions?.isOpen) return;

        const origin = commentReplySheetOptions.origin as OriginType;
        const paramKey = originMap[origin];

        const value = commentReplySheetOptions.param?.[paramKey];

        if (value) {
            setInputValue(`${value} `);
        }

        bottomSheetRef.current?.expand();
    }, [commentReplySheetOptions, setInputValue, bottomSheetRef]);
}
