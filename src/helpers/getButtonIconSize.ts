import { ButtonPropsExtended } from "../components/Button/types";

export function getButtonIconSize(size: ButtonPropsExtended['size']) {
    return size === 'medium' ? 'small' : 'extraSmall';
};