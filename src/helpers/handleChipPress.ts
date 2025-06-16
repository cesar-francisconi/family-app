import {
    isQuartiaryOption,
    QuartiaryOption,
} from './extractChips';

type HandleChipsPressParams = {
    item: string;
    index: number;
    chipsCarouselIndex: number;
    setIsActiveIndex: (index: number) => void;
    setActor: (value: string) => void;
    setGenre: (value: string) => void;
    setYear: (value: string) => void;
    setOrder: (value: QuartiaryOption) => void;
};

export function handleChipPress({
    item,
    index,
    chipsCarouselIndex,
    setIsActiveIndex,
    setActor,
    setGenre,
    setYear,
    setOrder,
}: HandleChipsPressParams) {
    setIsActiveIndex(index);

    switch (chipsCarouselIndex) {
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
            if (isQuartiaryOption(item)) {
                setOrder(item);
            }
            break;
    }
}
