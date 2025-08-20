import { AvatarProps } from "../components/Avatar/types";
import { Colors } from "../constants/Colors";
import { getLoggedInUserInitialBackground } from "../hook/useUser";

export function getAvatarBackgroundColor(mode: AvatarProps['mode']) {
    const initialBackground = getLoggedInUserInitialBackground();

    return mode === 'initial' ? initialBackground : Colors.surface.main;
};