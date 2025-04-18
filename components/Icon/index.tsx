import React from "react";
import { iconMap, IconFontName, IconProps, glyphMap } from "./types";

export function Icon<K extends IconFontName>({
    name,
    icon,
    size = 'medium',
    color = "white",
}: IconProps<K>): React.ReactNode {

    const IconComponent = iconMap[name] as unknown as React.ComponentType<{
        name: glyphMap[K];
        size?: number;
        color?: string;
    }>;

    const sizeMap = {
        large: 38,
        medium: 22,
        small: 16,
        extraSmall: 12,
    } as const;

    const resolvedSize = sizeMap[size] ?? sizeMap.large;

    return <IconComponent name={icon} size={resolvedSize} color={color} />;
}
