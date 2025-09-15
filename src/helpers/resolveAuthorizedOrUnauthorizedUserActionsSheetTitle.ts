import { AuthorizedUserActionsSheetOptions } from "../hook/useAuthorizedUserActionsSheet";

interface ResolveAuthorizedOrUnauthorizedUserActionsSheetTitleProps {
    origin: AuthorizedUserActionsSheetOptions['origin'];
};

export function resolveAuthorizedOrUnauthorizedUserActionsSheetTitle({ origin }: ResolveAuthorizedOrUnauthorizedUserActionsSheetTitleProps) {
    let title;

    if (origin === 'isComment' || origin === 'isSelectedParentComment') {
        title = 'Comentários';
    } else {
        title = 'Respostas';
    };

    return title;
};