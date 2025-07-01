// helpers/handleSheetChange.ts
import { useCallback } from 'react';

type SheetChangeFn = () => void;

export const useHandleSheetChange = (
    onClose: SheetChangeFn,
    onOpen: SheetChangeFn
) =>
    useCallback((index: number) => {
        if (index === -1) {
            onClose();
        } else {
            onOpen();
        }
    }, [onClose, onOpen]);
