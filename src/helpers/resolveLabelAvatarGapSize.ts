import { LabelAvatarProps } from "../components/LabelAvatar/types";
import { Spacing } from "../constants/Spacing";

interface ResolveAvatarGapSizeProps {
    orientation: Exclude<LabelAvatarProps['orientation'], undefined>;
    size: Exclude<LabelAvatarProps['size'], undefined>;
};

export function resolveLabelAvatarGapSize({ orientation, size }: ResolveAvatarGapSizeProps) {

    const gapMap = {
        horizontal: { large: Spacing['lg'], small: Spacing['md'] },
        vertical: { large: Spacing['sm'], small: Spacing['xs'] },
    };

    return gapMap[orientation][size];
};