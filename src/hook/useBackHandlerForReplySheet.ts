import { useEffect } from "react";
import { BackHandler } from "react-native";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export function useBackHandlerForReplySheet({ isOpen, onClose }: Props) {
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