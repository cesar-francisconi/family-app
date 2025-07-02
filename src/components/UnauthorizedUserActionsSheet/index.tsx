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
import { UnauthorizedUserActionsSheetProps } from './types';
import { usePathName } from '@/src/hook/usePathname';
import {
    handleUnauthorizedReply,
    setUnauthorizedUserActionsSheet,
    useUnauthorizedUserActionsSheet,
} from '@/src/hook/useUnauthorizedUserActionsSheet';
import { Easing } from 'react-native-reanimated';
import { useBackHandlerForReplySheet } from '@/src/hook/useBackHandlerForReplySheet';
import { useHandleSheetChange } from '@/src/hook/useHandleSheetChange';
import { useExpandBottomSheetOnOpen } from '@/src/hook/useExpandBottomSheetOnOpen';
import { useBottomSheetBackdrop } from '../Backdrop';

export const UnauthorizedUserActionsSheet = (props: UnauthorizedUserActionsSheetProps) => {

    const {
        replyTitle,
    } = props;

    const bottomSheetRef = useRef<BottomSheet>(null);

    const options = useUnauthorizedUserActionsSheet((state) => state.options);
    const origin = options.origin;
    const param = options.param;

    const pathname = usePathName();

    const title = pathname === '/' ? 'Comentários' : 'Respostas';

    useBackHandlerForReplySheet({
        isOpen: options.isOpen,
        onClose: () => {
            bottomSheetRef.current?.close();
            setUnauthorizedUserActionsSheet({ isOpen: false });
        },
    });

    useExpandBottomSheetOnOpen({
        actionsSheetOptions: options,
        bottomSheetRef,
    });

    const renderBackdrop = useBottomSheetBackdrop({
        onPress: () => {
            setUnauthorizedUserActionsSheet({ isOpen: false });
        },
        style: styles.renderBackdrop,
    });

    const handleChange = useHandleSheetChange(
        () => {
            setUnauthorizedUserActionsSheet({ isOpen: false });
        },
        () => {

        }
    );

    return (
        <BottomSheet
            ref={bottomSheetRef}
            enablePanDownToClose
            index={-1}
            detached
            animationConfigs={{
                easing: Easing.linear
            }}
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
                    onPress={() => handleUnauthorizedReply({
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
            </BottomSheetView>
        </BottomSheet >
    );
};


