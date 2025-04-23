type DefaultAvatar = {
    stroke?: boolean;
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

export type LabelAvatarProps = AvatarProps & {
    label: string;
    orientation?: 'horizontal' | 'vertical';
    size?: 'large' | 'small',
    alignSelf?: 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
};