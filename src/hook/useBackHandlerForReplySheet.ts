import { useEffect } from "react";
import { BackHandler } from "react-native";

interface UseBackHandlerForReplySheet {
    isOpen: boolean;
    onClose: () => void;
}

export function useBackHandlerForReplySheet({ isOpen, onClose }: UseBackHandlerForReplySheet) {
    useEffect(() => {
        const onBackPress = () => {
            if (isOpen) {
                onClose();
                
                return true;
            };
            
            return false;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

        return () => backHandler.remove();
    }, [isOpen, onClose]);
};