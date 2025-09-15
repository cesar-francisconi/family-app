import { useMemo } from "react";
import { Icon } from "../components/Icon";
import {
    IconFontName,
    IconProps,
} from "../components/Icon/types";

export function useIcon<K extends IconFontName>(props: IconProps<K>) {
    const { name, icon, color, size } = props;

    return useMemo(
        () => <Icon name={name} icon={icon} color={color} size={size} />,
        [name, icon, color, size]
    );
};