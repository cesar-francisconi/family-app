import { create } from 'zustand';

export interface ConfirmSignOutModalOptions {
    isOpen: boolean;
};

interface InitialStateProps {
    options: ConfirmSignOutModalOptions;
};

const initialState: InitialStateProps = {
    options: {
        isOpen: false,
    },
};

export const useConfirmSignOutModal = create(() => initialState);

export const setConfirmSignOutModal = ({ isOpen }: ConfirmSignOutModalOptions) => useConfirmSignOutModal.setState(() => {
    return {
        options: {
            isOpen,
        },
    };
});