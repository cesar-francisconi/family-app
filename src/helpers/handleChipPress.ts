import {
    OrderOptions,
} from './extractMovieFilters';

type HandleChipsPressParams = {
    item: string;
    index: number;
    filterCategoryIndex: number;
    setIsActiveChip: (index: number) => void;
    setActor: (value: string) => void;
    setGenre: (value: string) => void;
    setYear: (value: string) => void;
    setOrder: (value: OrderOptions) => void;
};

export function handleChipPress({
    item,
    index,
    filterCategoryIndex,
    setIsActiveChip,
    setActor,
    setGenre,
    setYear,
    setOrder,
}: HandleChipsPressParams) {
    setIsActiveChip(index);

    switch (filterCategoryIndex) {
        case 0:
            setActor(item);
            break;
        case 1:
            setGenre(item);
            break;
        case 2:
            setYear(item);
            break;
        case 3:
            setOrder(item as OrderOptions);
            break;
    }
}
