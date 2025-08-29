// src/hooks/useHandleOnFilterChipPressed.ts
import { useCallback } from "react";

export function useOnFilterChipPressed(setIsFiltering?: React.Dispatch<React.SetStateAction<boolean>>) {
    const handlePress = useCallback(() => {
        if (setIsFiltering) {
            setIsFiltering(true);
        };
    }, [setIsFiltering]);

    return handlePress;
}
