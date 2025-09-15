import { useRouter } from "expo-router";
import { useCallback } from "react";
import { openCommentActionsSheet } from "../helpers/openCommentActionsSheet";
import { useDebounce } from "../helpers/debounce";
import {
    setCurrentCommentId,
    setCurrentUserId
} from "./useMovie";
import { Comment } from "@/movie";
import { usePathName } from "./usePathname";
import { getLoggedInUserId } from "./useUser";

type useCommentActionsProps = {
    actionTime?: number;
};

export const useCommentActions = (props?: useCommentActionsProps) => {
    const { actionTime } = props || {};

    const router = useRouter();
    const { debounce } = useDebounce();
    const pathname = usePathName();
    const loggedInUserId = getLoggedInUserId();

    const commentMorePress = useCallback((item: Comment) => {
        debounce(() => openCommentActionsSheet({
            loggedInUserId,
            pathname,
            comment: item.comment,
            id: item.id,
            userId: item.userId,
        }), actionTime);
    }, []);

    const commentAnswersPress = useCallback((item: Comment) => {
        debounce(() => {
            setCurrentUserId(item.userId);
            setCurrentCommentId(item.id);

            router.push(`/(app)/(details)/(comments)/answers?commentId=${item.id}`);
        }, actionTime);
    }, []);

    return { commentMorePress, commentAnswersPress };
};