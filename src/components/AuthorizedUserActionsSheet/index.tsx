import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { Icon } from '@/src/components/Icon';
import React, {
    useRef,
} from 'react';
import BottomSheet, {
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { AuthorizedUserActionsSheetProps } from './types';
import {
    handleAuthorizedEdit,
    handleAuthorizedReply,
    setAuthorizedUserActionsSheet,
    useAuthorizedUserActionsSheet,
} from '@/src/hook/useAuthorizedUserActionsSheet';
import { Easing } from 'react-native-reanimated';
import { useBackHandlerForReplySheet } from '@/src/hook/useBackHandlerForReplySheet';
import { useHandleSheetChange } from '@/src/hook/useHandleSheetChange';
import { useExpandBottomSheetOnOpen } from '@/src/hook/useExpandBottomSheetOnOpen';
import { useBottomSheetBackdrop } from '../Backdrop';
import { setConfirmDeleteCommentModal } from '@/src/hook/useConfirmDeleteCommentModal';
import { ActionDefaultOpacity } from '@/src/constants/Opacity';
import { resolveAuthorizedOrUnauthorizedUserActionsSheetTitle } from '@/src/helpers/resolveAuthorizedOrUnauthorizedUserActionsSheetTitle';

export const AuthorizedUserActionsSheet = React.memo((props: AuthorizedUserActionsSheetProps) => {

    const {
        replyTitle,
        editTitle,
        deleteTitle,
    } = props;

    const bottomSheetRef = useRef<BottomSheet>(null);

    const options = useAuthorizedUserActionsSheet(state => state.options);
    const origin = options.origin;
    const param = options.param;

    const title = resolveAuthorizedOrUnauthorizedUserActionsSheetTitle({ origin });

    useBackHandlerForReplySheet({
        isOpen: options.isOpen,
        onClose: () => {
            bottomSheetRef.current?.close();
        },
    });

    useExpandBottomSheetOnOpen({
        actionsSheetOptions: options,
        bottomSheetRef,
    });

    const renderBackdrop = useBottomSheetBackdrop({
        onPress: () => {
            bottomSheetRef.current?.close();
        },
        style: styles.renderBackdrop,
    });

    const handleChange = useHandleSheetChange(
        () => {
            setAuthorizedUserActionsSheet({ isOpen: false });
        },
        () => {

        }
    );

    return (
        <BottomSheet
            ref={bottomSheetRef}
            enablePanDownToClose
            index={-1}
            animationConfigs={{
                easing: Easing.linear
            }}
            detached
            style={styles.bottomSheet}
            onChange={handleChange}
            handleIndicatorStyle={styles.handleIndicatorStyle}
            backgroundStyle={styles.backgroundStyle}
            backdropComponent={renderBackdrop}
            containerStyle={styles.containerStyle}
        >
            <BottomSheetView style={styles.bottomSheetViewContainer}>
                <Text
                    style={styles.title}
                >
                    {title}
                </Text>

                <TouchableOpacity
                    style={styles.actionContainer}
                    onPress={() => {
                        bottomSheetRef.current?.close();

                        handleAuthorizedReply({
                            origin,
                            param,
                        })
                    }}
                    activeOpacity={ActionDefaultOpacity}
                >
                    <Icon
                        name='MaterialCommunityIcons'
                        icon='comment-outline'
                    />

                    <Text
                        style={styles.actionTitle}
                    >
                        {replyTitle}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.actionContainer}
                    onPress={() => {
                        bottomSheetRef.current?.close();

                        handleAuthorizedEdit({
                            origin,
                            param,
                        })
                    }}
                >
                    <Icon
                        name='Feather'
                        icon='edit-2'
                    />

                    <Text
                        style={styles.actionTitle}
                    >
                        {editTitle}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.actionContainer}
                    onPress={() => {
                        bottomSheetRef.current?.close();

                        setConfirmDeleteCommentModal({
                            isOpen: true,
                            param: {
                                origin,
                            }
                        })
                    }}
                >
                    <Icon
                        name='Feather'
                        icon='trash-2'
                    />

                    <Text
                        style={styles.actionTitle}
                    >
                        {deleteTitle}
                    </Text>
                </TouchableOpacity>
            </BottomSheetView>
        </BottomSheet >
    );
});


