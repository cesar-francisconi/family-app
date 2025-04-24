import { AvatarNoImage, AvatarWithImage, DefaultAvatar } from "../Avatar/types";

type defaultAvatar = {
    avatarStroke?: DefaultAvatar['stroke'];
};

type avatarWithImage = defaultAvatar & {
    avatarMode: 'image';
    avatarImageUrl: AvatarWithImage['imageUrl'];
    avatarInitial?: never;
};

type avatarNoImage = defaultAvatar & {
    avatarMode: 'initial';
    avatarImageUrl?: never;
    avatarInitial: AvatarNoImage['initial'];
};

export type AVATARPROPS = avatarWithImage | avatarNoImage;

export type LabelAvatarProps = AVATARPROPS & {
    label: string;
    orientation?: 'horizontal' | 'vertical';
    size?: 'large' | 'small',
    alignSelf?: 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
};