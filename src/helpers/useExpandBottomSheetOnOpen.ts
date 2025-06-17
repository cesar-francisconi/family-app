import { useEffect } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { AuthorizedUserActionsSheetOptions } from '../hook/useAuthorizedUserActionsSheet';
import { UnauthorizedUserActionsSheetOptions } from '../hook/useUnauthorizedUserActionsSheet';

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
