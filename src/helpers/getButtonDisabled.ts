import { CommentReplySheetOptions } from "../hook/useCommentReplySheet";

interface getButtonDisabledProps {
    inputValue: string;
    commentReplySheetOptions: CommentReplySheetOptions;
};

export const getButtonDisabled = ({
    inputValue,
    commentReplySheetOptions,
}: getButtonDisabledProps): boolean => {
    const trimmedInput = inputValue.trim();
    const options = commentReplySheetOptions.param;

    if (!trimmedInput) return true;

    const repeatedReplies = [
        options?.authorizedUserActionsSheetReply,
        options?.unauthorizedUserActionsSheetReply,
        options?.authorizedUserActionsSheetEdit,
        options?.commentCommentAction,
        options?.answerCommentAction,
    ];

    return repeatedReplies.some(opt => trimmedInput === opt?.trim());
};