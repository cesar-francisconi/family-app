// src/helpers/useBottomSheetBackdrop.ts
import { useCallback } from 'react';
import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import {
    StyleProp,
    ViewStyle,
} from 'react-native';
import { BackdropPressBehavior } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

type UseBottomSheetBackdropProps = {
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    opacity?: number;
    disappearsOnIndex?: number;
    appearsOnIndex?: number;
    pressBehavior?: BackdropPressBehavior;
};

export function useBottomSheetBackdrop({
    onPress,
    style,
    opacity = 0.5,
    disappearsOnIndex = -1,
    appearsOnIndex = 0,
    pressBehavior,
}: UseBottomSheetBackdropProps) {
    return useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                pressBehavior={pressBehavior}
                opacity={opacity}
                style={style}
                disappearsOnIndex={disappearsOnIndex}
                appearsOnIndex={appearsOnIndex}
                onPress={onPress}
            />
        ),
        [onPress, style, opacity, disappearsOnIndex, appearsOnIndex, pressBehavior]
    );
}
