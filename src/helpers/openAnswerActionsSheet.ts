import { AnswerProps } from "../components/Answer/types";
import {
    AuthorizedUserActionsSheetOptions,
    setAuthorizedUserActionsSheet,
} from "../hook/useAuthorizedUserActionsSheet";
import {
    setCurrentAnswerId,
    setCurrentUserId,
} from "../hook/useMovie";
import { setUnauthorizedUserActionsSheet } from "../hook/useUnauthorizedUserActionsSheet";

interface OpenAnswerActionsSheetProps {
    loggedInUserId: AnswerProps['userId'];
    username: AnswerProps['username'];
    answer: AnswerProps['answer'];
    userId: AnswerProps['userId'];
    id: AnswerProps['id'];
};

export const openAnswerActionsSheet = ({
    loggedInUserId,
    username,
    answer,
    userId,
    id,
}: OpenAnswerActionsSheetProps) => {
    const isAuthorizedUser = loggedInUserId === userId;

    const baseParams: AuthorizedUserActionsSheetOptions = {
        isOpen: true,
        origin: 'isAnswer',
    };

    if (isAuthorizedUser) {
        setAuthorizedUserActionsSheet({
            ...baseParams,
            param: { replyTo: username, editTo: answer },
        });
    } else {
        setUnauthorizedUserActionsSheet({
            ...baseParams,
            param: { replyTo: username },
        });
    }

    setCurrentUserId(userId);
    setCurrentAnswerId(id);
};