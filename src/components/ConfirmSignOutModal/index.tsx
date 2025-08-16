import {
    SafeAreaView,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { ConfirmSignOutModalProps } from "./types";
import { styles } from "./styles";
import Animated, {
    FadeIn,
    FadeOut,
} from "react-native-reanimated";
import { Button } from "../Button";
import { handleAuthorizedDelete } from "@/src/hook/useAuthorizedUserActionsSheet";
import { useState } from "react";
import { useBackHandlerForReplySheet } from "@/src/hook/useBackHandlerForReplySheet";
import { getAuth, signOut } from "@react-native-firebase/auth";
import Toast from "react-native-toast-message";
import { setConfirmSignOutModal, useConfirmSignOutModal } from "@/src/hook/useConfirmSignOutModal";


export function ConfirmSignOutModal(props: ConfirmSignOutModalProps) {

    const {

    } = props;

    const [isLoading, setIsLoading] = useState(false);

    const {
        isOpen,
    } = useConfirmSignOutModal((state) => state.options);


    const handleClose = () => {
        setConfirmSignOutModal({ isOpen: false });
    };

    const handleSignOut = () => {
        setIsLoading(true);

        const auth = getAuth();

        signOut(auth).then(() => {
            Toast.show({
                type: 'customSuccess',
                text2: 'Usuário deslogado!',
                position: 'top',
                visibilityTime: 1700,
            });

            handleClose();
        }).catch((error) => {
            setIsLoading(false);
        });
    };

    useBackHandlerForReplySheet({
        isOpen: isOpen,
        onClose: () => {
            handleClose();
        },
    });

    return isOpen ? (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={isLoading ? undefined : handleClose}>
                <View
                    style={styles.overlay}
                >
                    <Animated.View
                        entering={FadeIn.duration(0)}
                        exiting={FadeOut.duration(0)}
                        style={styles.box}
                        onStartShouldSetResponder={() => true}
                    >
                        <Text
                            style={styles.description}
                        >
                            Tem certeza que deseja sair do aplicativo?
                        </Text>

                        <View
                            style={styles.buttonsContainer}
                        >
                            <Button
                                onPress={isLoading ? undefined : handleClose}
                                type="primary"
                                variant="filled"
                                title='Cancelar'
                                size="small"
                                borderRadius="medium"
                            />

                            <Button
                                onPress={isLoading ? undefined : handleSignOut}
                                type="tertiary"
                                isLoading={isLoading}
                                variant="filled"
                                title='Sair'
                                size="small"
                                borderRadius="medium"
                            />
                        </View>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    ) : null;
}

