import { AddCommentProps } from "../AddComment/types";
import { AvatarNoImage, AvatarWithImage, DefaultAvatar } from "../Avatar/types";

type defaultAvatar = {
    avatarStroke?: DefaultAvatar['stroke'];
    avatarSize?: DefaultAvatar['size']
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

export type AvatarProps = avatarWithImage | avatarNoImage;

export type addCommentProps = {
    addCommentText?: AddCommentProps['text'];
    addCommentBorderRadius?: AddCommentProps['borderRadius'];
};

export type AddCommentWithAvatarProps = AvatarProps & addCommentProps & {

};