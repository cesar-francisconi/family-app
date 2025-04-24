export type DefaultAvatar = {
    stroke?: boolean;
    size?: 'large' | 'medium' | 'small';
};

export type AvatarWithImage = DefaultAvatar & {
    mode: 'image';
    imageUrl: string;
    initial?: never;
};

export type AvatarNoImage = DefaultAvatar & {
    mode: 'initial';
    imageUrl?: never;
    initial: string;
};

export type AvatarProps = AvatarWithImage | AvatarNoImage;