import { ChipProps } from "../Chip/types";

export type MovieFilterChipsGroupProps = {
    chipOptions?: ChipProps;
    setIsFiltering?: React.Dispatch<React.SetStateAction<boolean>>;
};