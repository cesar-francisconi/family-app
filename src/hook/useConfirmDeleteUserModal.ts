import { create } from 'zustand';
import { FormDataDeleteUser } from '../helpers/formSchemaDeleteUser';
import { FormDataDeleteGoogleUser } from '../helpers/formSchemaDeleteGoogleUser';
import { UseFormSetError } from 'react-hook-form';

interface InitialStateProps {
    isOpen: boolean;
    data: FormDataDeleteUser | FormDataDeleteGoogleUser | null;
    setError: UseFormSetError<FormDataDeleteUser> | UseFormSetError<FormDataDeleteGoogleUser> | null;
};

const initialState: InitialStateProps = {
    isOpen: false,
    data: null,
    setError: null,
};

export const useConfirmDeleteUserModal = create(() => initialState);

export const setConfirmDeleteUserModal = ({ isOpen, data, setError }: InitialStateProps) => useConfirmDeleteUserModal.setState(() => {
    return {
        isOpen,
        data,
        setError,
    };
});