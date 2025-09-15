import {
    StyleProp,
    TextStyle,
} from "react-native";
import { LabelAvatarProps } from "../components/LabelAvatar/types";
import { Font } from "../constants/Font";

interface ResolveLabelAvatarStyleProps {
    orientation: Exclude<LabelAvatarProps['orientation'], undefined>;
    size: Exclude<LabelAvatarProps['size'], undefined>;
};

interface ResolveLabelAvatarStyleReturn {
    flexDirection: 'column' | 'row';
    fontSize: StyleProp<TextStyle>;
};

export function resolveLabelAvatarStyle({ orientation, size }: ResolveLabelAvatarStyleProps): ResolveLabelAvatarStyleReturn {
    const fontSize = {
        large: Font.label.extraLargeProminent,
        small: Font.label.smallProminent,
    };

    return {
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        fontSize: fontSize[size],
    };
};