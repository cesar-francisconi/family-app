import {
    SafeAreaView,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { ConfirmDeleteCommentModalProps } from "./types";
import { styles } from "./styles";
import Animated, {
    FadeIn,
    FadeOut,
} from "react-native-reanimated";
import { Button } from "../Button";
import {
    setConfirmDeleteCommentModal,
    useConfirmDeleteCommentModal,
} from "@/src/hook/useConfirmDeleteCommentModal";
import { handleAuthorizedDelete } from "@/src/hook/useAuthorizedUserActionsSheet";
import { useState } from "react";
import { useBackHandlerForReplySheet } from "@/src/hook/useBackHandlerForReplySheet";


export function ConfirmDeleteCommentModal(props: ConfirmDeleteCommentModalProps) {

    const {

    } = props;

    const [isLoading, setIsLoading] = useState(false);

    const {
        isOpen,
        param,
    } = useConfirmDeleteCommentModal((state) => state.options);


    const handleClose = () => {
        setConfirmDeleteCommentModal({ isOpen: false });
    };

    useBackHandlerForReplySheet({
        isOpen: isOpen,
        onClose: () => {
            handleClose();
        },
    });

    if (!param) return null;

    return isOpen && param ? (
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
                            Tem certeza que deseja excluir o comentário?
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
                                onPress={isLoading ? undefined : () => {
                                    const {
                                        origin,
                                    } = param;

                                    handleAuthorizedDelete({
                                        origin,
                                        setIsLoading,
                                    });
                                }
                                }
                                type="tertiary"
                                isLoading={isLoading}
                                variant="filled"
                                title='Excluir'
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

