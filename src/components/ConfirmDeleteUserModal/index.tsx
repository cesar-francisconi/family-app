import {
    SafeAreaView,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { ConfirmDeleteUserModalProps } from "./types";
import { styles } from "./styles";
import Animated, {
    FadeIn,
    FadeOut,
} from "react-native-reanimated";
import { Button } from "../Button";
import {
    setConfirmDeleteUserModal,
    useConfirmDeleteUserModal,
} from "@/src/hook/useConfirmDeleteUserModal";
import { getLoggedInUserIsGoogleAccount } from "@/src/hook/useUser";
import { useState } from "react";
import { handleDeleteGoogleUser } from "@/src/helpers/handleDeleteGoogleUser";
import { handleDeleteUser } from "@/src/helpers/handleDeleteUser";
import { FormDataDeleteUser } from "@/src/helpers/formSchemaDeleteUser";


export function ConfirmDeleteUserModal(props: ConfirmDeleteUserModalProps) {

    const {

    } = props;

    const { isOpen, data, setError } = useConfirmDeleteUserModal((state) => state);

    const isGoogleAccount = getLoggedInUserIsGoogleAccount();
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => {
        setConfirmDeleteUserModal({
            isOpen: false,
            data: null,
            setError: null,
        });

        setIsLoading(false);
    };

    const handleConfirmDelete = async () => {
        if (!data) return;
        if (!setError) return;

        setIsLoading(true);

        let handle;
        if (isGoogleAccount) {
            handle = handleDeleteGoogleUser({ confirmEmail: data.confirmEmail });
        } else {
            // Type guard: data is FormDataDeleteUser here
            handle = handleDeleteUser({
                confirmEmail: data.confirmEmail,
                confirmPassword: (data as FormDataDeleteUser).confirmPassword,
            });
        }

        try {
            await handle;

        } catch (error: any) {
            if (error.code === 'confirmed-email-mismatch') {
                setError('confirmEmail', {
                    type: 'manual',
                    message: error.message,
                });
            } else if (error.code === 'auth/invalid-credential') {
                if (!isGoogleAccount) {
                    (setError as (name: 'confirmPassword', error: { type: string; message: string }) => void)(
                        'confirmPassword',
                        {
                            type: 'manual',
                            message: 'A senha confirmada não bate com a sua senha de login. Verifique se você digitou corretamente.',
                        }
                    );
                }
            }
        } finally {
            setIsLoading(false);

            handleClose();
        };
    };

    return isOpen ? (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={handleClose}>
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
                            Tem certeza que deseja excluir a conta?
                        </Text>

                        <View
                            style={styles.buttonsContainer}
                        >
                            <Button
                                onPress={handleClose}
                                type="primary"
                                variant="filled"
                                title='Cancelar'
                                size="small"
                                borderRadius="medium"
                            />

                            <Button
                                onPress={handleConfirmDelete}
                                type="tertiary"
                                variant="filled"
                                title='Excluir'
                                size="small"
                                borderRadius="medium"
                                isLoading={isLoading}
                            />
                        </View>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    ) : null;
}

