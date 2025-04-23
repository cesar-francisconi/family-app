type DefaultAvatar = {
    stroke?: boolean;
    size?: 'large' | 'medium' | 'small';
};

type AvatarWithImage = DefaultAvatar & {
    mode: 'image';
    imageUrl: string;
    initial?: never;
};

type AvatarNoImage = DefaultAvatar & {
    mode: 'initial';
    imageUrl?: never;
    initial: string;
};

export type AvatarProps = AvatarWithImage | AvatarNoImage;
