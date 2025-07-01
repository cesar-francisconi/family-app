import { AvatarProps } from "../Avatar/types";

type defaultAvatar = {
    label: string;
    orientation?: 'horizontal' | 'vertical';
    size?: 'large' | 'small',
    alignSelf?: 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
};

export type LabelAvatarProps = defaultAvatar & {
    avatarOptions: AvatarProps;
};