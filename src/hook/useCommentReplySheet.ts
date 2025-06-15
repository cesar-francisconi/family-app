import { create } from 'zustand';

export interface CommentReplySheetOptions {
    isOpen: boolean;
    origin?: 'isAddComment'

    | 'isCommentCommentAction'
    | 'isSelectedParentCommentCommentAction'
    | 'isAnswerCommentAction'

    | 'isCommentAuthorizedUserActionsSheetReply'
    | 'isSelectedParentCommentAuthorizedUserActionsSheetReply'
    | 'isAnswerAuthorizedUserActionsSheetReply'

    | 'isCommentAuthorizedUserActionsSheetEdit'
    | 'isSelectedParentCommentAuthorizedUserActionsSheetEdit'
    | 'isAnswerAuthorizedUserActionsSheetEdit'

    | 'isCommentUnauthorizedUserActionsSheetReply'
    | 'isSelectedParentCommentUnauthorizedUserActionsSheetReply'
    | 'isAnswerUnauthorizedUserActionsSheetReply';

    param?: {
        authorizedUserActionsSheetReply?: string;
        authorizedUserActionsSheetEdit?: string;
        unauthorizedUserActionsSheetReply?: string;
        commentCommentAction?: string;
        answerCommentAction?: string;
    },
};

interface InitialStateProps {
    options: CommentReplySheetOptions;
};

const initialState: InitialStateProps = {
    options: {
        isOpen: false,
        origin: undefined,
        param: undefined,
    },
};

export const useCommentReplySheet = create(() => initialState);

export const setCommentReplySheet = ({ isOpen, origin, param }: CommentReplySheetOptions) => useCommentReplySheet.setState(() => {
    return {
        options: {
            isOpen,
            origin,
            param,
        },
    };
});
