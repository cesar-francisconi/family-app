export type DefaultAvatar = {
    withStroke?: boolean;
    size?: 'large' | 'medium' | 'small';
};

export type AvatarWithImage = DefaultAvatar & {
    mode: 'image';
    imageUrl: string;
    initial?: never;
    background?: never;
};

export type AvatarNoImage = DefaultAvatar & {
    mode: 'initial';
    imageUrl?: never;
    initial: string;
    background: string | null;
};

export type AvatarProps = AvatarWithImage | AvatarNoImage;