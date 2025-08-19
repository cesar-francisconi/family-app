import { BorderRadius } from "../constants/BorderRadius";
import {
    ActorCardPropsDefault,
    BorderRadiusActorCard,
} from "../components/ActorCard/types";
import { Colors } from "../constants/Colors";

interface borderRadiusMapType {
    none: 0;
    small: 2;
    medium: 8;
    large: 16;
};

function isBorderRadiusActorCard(value: any): value is ActorCardPropsDefault['borderRadius'] {
    return ['none', 'small', 'medium', 'large'].includes(value);
};

function isBoolean(value: any): value is ActorCardPropsDefault['withStroke'] {
    return typeof value === 'boolean';
};

function getActorCardBorderValue(type: 'borderWidth', value: boolean): number | undefined;
function getActorCardBorderValue(type: 'borderColor', value: boolean): string | undefined;
function getActorCardBorderValue(type: 'borderRadius', value: BorderRadiusActorCard): number | undefined;
function getActorCardBorderValue(
    type: 'borderWidth' | 'borderColor' | 'borderRadius',
    value: boolean | BorderRadiusActorCard,
): number | string | undefined {
    switch (type) {
        case 'borderWidth':
            if (isBoolean(value)) return value ? 0.5 : undefined;

            return undefined;
        case 'borderColor':
            if (isBoolean(value)) return value ? Colors.outline.main : undefined;

            return undefined;
        case 'borderRadius':
            const borderRadiusMap: borderRadiusMapType = {
                none: BorderRadius.none,
                small: BorderRadius.xs,
                medium: BorderRadius.sm,
                large: BorderRadius.md,
            };

            if (isBorderRadiusActorCard(value)) return borderRadiusMap[value];

            return undefined;
    };
};

export { getActorCardBorderValue };