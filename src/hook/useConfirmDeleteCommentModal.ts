import { create } from 'zustand';
import { AuthorizedUserActionsSheetOptions } from './useAuthorizedUserActionsSheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

export interface ConfirmDeleteCommentModalOptions {
    isOpen: boolean;
    param?: {
        origin: AuthorizedUserActionsSheetOptions['origin'];
    };
};

interface InitialStateProps {
    options: ConfirmDeleteCommentModalOptions;
};

const initialState: InitialStateProps = {
    options: {
        isOpen: false,
        param: undefined,
    },
};

export const useConfirmDeleteCommentModal = create(() => initialState);

export const setConfirmDeleteCommentModal = ({ isOpen, param }: ConfirmDeleteCommentModalOptions) => useConfirmDeleteCommentModal.setState(() => {
    return {
        options: {
            isOpen,
            param,
        },
    };
});