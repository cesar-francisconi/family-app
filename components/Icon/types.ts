import {
    Entypo,
    MaterialCommunityIcons,
    Feather,
    Ionicons,
    MaterialIcons,
    AntDesign,
    Octicons,
    Fontisto,
} from "@expo/vector-icons";

export const iconMap = {
    AntDesign,
    Entypo,
    Feather,
    Fontisto,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
};

const iconNames = {
    AntDesign: ['like2', 'dislike2', 'close', 'plus', 'google'],
    Entypo: ['chevron-thin-left', 'chevron-thin-right', ''],
    Feather: ['lock', 'eye', 'eye-off', 'mic', 'more-vertical', 'user', 'folder', 'share-2', 'search', 'trash-2', 'cast', 'check-square', 'square'],
    Fontisto: ['clock'],
    Ionicons: ['play-sharp'],
    MaterialCommunityIcons: ['comment-outline', 'email-outline', 'facebook'],
    MaterialIcons: ['logout', 'date-range', 'play-circle-outline'],
    Octicons: ['home'],
} as const;

type IconNames = typeof iconNames;

export type glyphMap = {
    [K in keyof IconNames]: Extract<keyof typeof import("@expo/vector-icons")[K]['glyphMap'], IconNames[K][number]>
};

export type IconFontName = keyof glyphMap;

export type IconProps<K extends IconFontName = IconFontName> = {
    name: K;
    icon: glyphMap[K];
    size?: 'large' | 'medium' | 'small' | 'extraSmall';
    color?: string;
};

export type IconComponentMap = {
    [K in IconFontName]: React.ComponentType<{
        name: glyphMap[K];
        size?: number;
        color?: string;
    }>;
};