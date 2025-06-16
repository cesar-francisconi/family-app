import React from "react";
import {
    iconMap,
    IconFontName,
    IconProps,
    glyphMap,
} from "./types";
import { Colors } from "@/src/constants/Colors";

export function Icon<K extends IconFontName>(props: IconProps<K>): React.ReactNode {

    const {
        name,
        icon,
        size = 'medium',
        color = Colors.surface.on,
    } = props;

    const IconComponent = iconMap[name] as unknown as React.ComponentType<{
        name: glyphMap[K];
        size?: number;
        color?: string;
    }>;

    const sizeMap = {
        extraLarge: 86,
        large: 38,
        medium: 24,
        small: 18,
        extraSmall: 14,
    } as const;

    const resolvedSize = sizeMap[size] ?? sizeMap.large;

    return <IconComponent
        name={icon}
        size={resolvedSize}
        color={color}
    />;
}
