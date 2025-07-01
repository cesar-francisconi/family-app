import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { Icon } from '@/src/components/Icon';
import {
    useRef,
} from 'react';
import BottomSheet, {
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { AuthorizedUserActionsSheetProps } from './types';
import { usePathName } from '@/src/hook/usePathname';
import {
    handleAuthorizedDelete,
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

export const AuthorizedUserActionsSheet = (props: AuthorizedUserActionsSheetProps) => {

    const {
        replyTitle,
        editTitle,
        deleteTitle,
    } = props;

    const bottomSheetRef = useRef<BottomSheet>(null);

    const pathname = usePathName();

    const options = useAuthorizedUserActionsSheet(state => state.options);
    const origin = options.origin;
    const param = options.param;

    const title = pathname === '/' ? 'Comentários' : 'Respostas';

    useBackHandlerForReplySheet({
        isOpen: options.isOpen,
        onClose: () => {
            bottomSheetRef.current?.close();
            setAuthorizedUserActionsSheet({ isOpen: false });
        },
    });

    useExpandBottomSheetOnOpen({
        actionsSheetOptions: options,
        bottomSheetRef,
    });

    const renderBackdrop = useBottomSheetBackdrop({
        onPress: () => {
            setAuthorizedUserActionsSheet({ isOpen: false });
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
                    onPress={() => handleAuthorizedReply({
                        bottomSheetRef,
                        origin,
                        param,
                    })}
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
                    onPress={() => handleAuthorizedEdit({
                        bottomSheetRef,
                        origin,
                        param,
                    })}
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
                    onPress={() => handleAuthorizedDelete({
                        bottomSheetRef,
                        origin,
                        param,
                    })}
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
};


