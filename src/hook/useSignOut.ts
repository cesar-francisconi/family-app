import { useCallback } from "react";
import { setConfirmSignOutModal } from "./useConfirmSignOutModal";

export function useSignOut() {
    return useCallback(() => {
        setConfirmSignOutModal({ isOpen: true });
    }, [setConfirmSignOutModal]);
};