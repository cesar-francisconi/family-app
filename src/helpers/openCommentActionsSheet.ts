import { UserCommentProps } from "../components/Comment/types";
import { setAuthorizedUserActionsSheet } from "../hook/useAuthorizedUserActionsSheet";
import {
    setCurrentCommentId,
    setCurrentUserId,
} from "../hook/useMovie";
import { setUnauthorizedUserActionsSheet } from "../hook/useUnauthorizedUserActionsSheet";

interface OpenCommentActionsSheetProps {
    loggedInUserId: UserCommentProps['userId'],
    userId: UserCommentProps['userId'],
    pathname: string,
    comment: UserCommentProps['comment'],
    id: UserCommentProps['id'],
};

export const openCommentActionsSheet = ({
    loggedInUserId,
    userId,
    pathname,
    comment,
    id,
}: OpenCommentActionsSheetProps) => {

    const isAuthorizedUser = loggedInUserId === userId;
    const isComment = pathname === '/comments';
    
    const baseProps = { isOpen: true };

    if (isAuthorizedUser) {
        setAuthorizedUserActionsSheet({
            ...baseProps,
            origin: isComment ? 'isComment' : 'isSelectedParentComment',
            param: {
                editTo: comment,
                ...(isComment && { replyTo: id }),
            },
        });
    } else {
        setUnauthorizedUserActionsSheet({
            ...baseProps,
            origin: isComment ? 'isComment' : 'isSelectedParentComment',
            ...(isComment && { param: { replyTo: id } }),
        });
    }

    setCurrentCommentId(id);
    setCurrentUserId(userId);
};