import { useEffect } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { AuthorizedUserActionsSheetOptions } from './useAuthorizedUserActionsSheet';
import { UnauthorizedUserActionsSheetOptions } from './useUnauthorizedUserActionsSheet';

interface Props {
    actionsSheetOptions: AuthorizedUserActionsSheetOptions | UnauthorizedUserActionsSheetOptions;
    bottomSheetRef: React.RefObject<BottomSheetMethods | null>;
};

export function useExpandBottomSheetOnOpen({
    actionsSheetOptions,
    bottomSheetRef,
}: Props) {
    useEffect(() => {
        if (actionsSheetOptions?.isOpen) {
            bottomSheetRef.current?.expand();
        };
    }, [actionsSheetOptions, bottomSheetRef]);
};
