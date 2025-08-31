import { AvatarProps } from '@/src/components/Avatar/types';

export function resolveAddCommentWithAvatarSize(avatarOptions: AvatarProps) {
  return avatarOptions.size ?? 'small';
};
