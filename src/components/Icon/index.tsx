import React, { memo } from "react";
import {
    iconMap,
    IconFontName,
    IconProps,
    glyphMap,
} from "./types";
import { Colors } from "@/src/constants/Colors";
import { resolveIconSize } from "@/src/helpers/resolveIconSize";

function IconBase<K extends IconFontName>(props: IconProps<K>): React.ReactNode {

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

    const resolvedSize = resolveIconSize(size);

    return <IconComponent
        name={icon}
        size={resolvedSize}
        color={color}
    />;
};

export const Icon = memo(IconBase);
