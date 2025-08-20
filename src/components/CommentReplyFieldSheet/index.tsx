import {
    Keyboard,
    TextInput,
} from 'react-native';
import {
    useEffect,
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
import { usePathName } from '@/src/hook/usePathname';
import { submitCommentOrAnswer } from '@/src/helpers/submitCommentOrAnswer';
import { useBackHandlerForReplySheet } from '@/src/hook/useBackHandlerForReplySheet';
import { useHandleSheetChange } from '@/src/hook/useHandleSheetChange';
import { Colors } from '@/src/constants/Colors';
import { getButtonDisabled } from '@/src/helpers/getButtonDisabled';
import { useExpandCommentReplyFieldBottomSheetOnOpen } from '@/src/hook/useExpandCommentReplyFieldBottomSheetOnOpen';
import { useBottomSheetBackdrop } from '../Backdrop';

export function CommentReplyFieldSheet(_: CommentReplyFieldSheetProps) {

    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const bottomSheetRef = useRef<BottomSheet>(null);
    const inputRef = useRef<TextInput>(null);

    const { movieId } = useGlobalSearchParams<CommentReplyFieldSheetGlobalSearchParams>();

    const commentReplySheetOptions = useCommentReplySheet((state) => state.options);

    const pathname = usePathName();

    const submitAfterKeyboardHide = useRef<null | (() => void)>(null);

    useEffect(() => {
        const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
            if (submitAfterKeyboardHide.current) {
                submitAfterKeyboardHide.current();
                submitAfterKeyboardHide.current = null; // limpa para não chamar duas vezes
            }
        });

        return () => {
            keyboardHideListener.remove();
        };
    }, []);

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
        style: styles.renderBackdrop,
        pressBehavior: isLoading ? 'none' : 'close',
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

    const placeholder = pathname === '/comments' ? 'Adicione um comentário' : 'Adicione uma resposta';

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
                    isButtonLoading={isLoading}
                    onChangeText={setInputValue}
                    fnButton={() => {
                        const inputValueTrim = inputValue.trim();

                        // define a função a ser executada quando o teclado fechar
                        submitAfterKeyboardHide.current = () => {
                            submitCommentOrAnswer({
                                movieId,
                                inputValue: inputValueTrim,
                                pathname,
                                inputRef,
                                commentReplySheetOptions,
                                bottomSheetRef,
                                resetInput: () => setInputValue(''),
                                setIsLoading,
                            });
                        };

                        Keyboard.dismiss(); // isso vai disparar o evento 'keyboardDidHide'
                    }}
                    ref={inputRef}
                />
            </BottomSheetView>
        </BottomSheet>
    );
}