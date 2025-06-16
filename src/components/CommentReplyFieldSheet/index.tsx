import {
    TextInput,
} from 'react-native';
import {
    useRef,
    useState,
} from 'react';
import BottomSheet, {
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { CommentReplyField } from '../CommentReplyField';
import {
    CommentReplyFieldSheetGlobalSearchParams,
    CommentReplyFieldSheetProps,
} from './types';
import {
    setCommentReplySheet,
    useCommentReplySheet,
} from '@/src/hook/useCommentReplySheet';
import { useGlobalSearchParams } from 'expo-router';
import { useUser } from '@/src/hook/useUser';
import { usePathName } from '@/src/hook/usePathname';
import { submitCommentOrAnswer } from '@/src/helpers/submitUserComment';
import { useBackHandlerForReplySheet } from '@/src/helpers/useBackHandlerForReplySheet';
import { useBottomSheetBackdrop } from '@/src/helpers/renderBackdrop';
import { useHandleSheetChange } from '@/src/helpers/useHandleSheetChange';
import { Colors } from '@/src/constants/Colors';
import { getButtonDisabled } from '@/src/helpers/getButtonDisabled';
import { useExpandCommentReplyFieldBottomSheetOnOpen } from '@/src/helpers/useExpandCommentReplyFieldBottomSheetOnOpen';

export function CommentReplyFieldSheet(_: CommentReplyFieldSheetProps) {

    const [inputValue, setInputValue] = useState('');

    const bottomSheetRef = useRef<BottomSheet>(null);
    const inputRef = useRef<TextInput>(null);

    const { movieId } = useGlobalSearchParams<CommentReplyFieldSheetGlobalSearchParams>();

    const commentReplySheetOptions = useCommentReplySheet((state) => state.options);

    const pathname = usePathName();

    const username = useUser((state) => state.username);
    const avatar = useUser((state) => state.avatar);
    const userId = useUser((state) => state.id);

    useBackHandlerForReplySheet({
        isOpen: commentReplySheetOptions.isOpen,
        onClose: () => {
            bottomSheetRef.current?.close();
            inputRef.current?.blur();
            setInputValue('');
            setCommentReplySheet({ isOpen: false });
        },
    });

    useExpandCommentReplyFieldBottomSheetOnOpen({
        commentReplySheetOptions: commentReplySheetOptions,
        setInputValue,
        bottomSheetRef,
    });

    const renderBackdrop = useBottomSheetBackdrop({
        onPress: () => {
            setCommentReplySheet({ isOpen: false });

            inputRef.current?.blur();
        },
        style: styles.renderBackdrop,
    });

    const handleChange = useHandleSheetChange(
        () => {
            setCommentReplySheet({ isOpen: false });
            inputRef.current?.blur();
            setInputValue('');
        },
        () => {
            inputRef.current?.focus();
        }
    );

    const placeholder = pathname === '/' ? 'Adicione um comentário' : 'Adicione uma resposta';

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            detached
            style={styles.container}
            onChange={handleChange}
            handleIndicatorStyle={styles.handleIndicatorStyle}
            backgroundStyle={styles.backgroundStyle}
            backdropComponent={renderBackdrop}
            enableContentPanningGesture={false}
            handleComponent={null}
        >
            <BottomSheetView style={styles.bottomSheetViewContainer}>
                <CommentReplyField
                    placeholder={placeholder}
                    placeholderTextColor={Colors.surface.onVariant}
                    value={inputValue}
                    buttonDisabled={getButtonDisabled({
                        inputValue,
                        commentReplySheetOptions,
                    })}
                    onChangeText={setInputValue}
                    fnButton={() => {
                        const inputValueTrim = inputValue.trim();

                        submitCommentOrAnswer({
                            movieId,
                            inputValue: inputValueTrim,
                            pathname,
                            username,
                            avatar,
                            userId,
                            inputRef,
                            commentReplySheetOptions,
                            bottomSheetRef,
                            resetInput: () => setInputValue(''),
                        });
                    }}
                    ref={inputRef}
                />
            </BottomSheetView>
        </BottomSheet>
    );
}