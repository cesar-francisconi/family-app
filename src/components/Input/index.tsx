import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import {
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { InputProps } from './types';
import { LabelCheck } from '../LabelCheck';
import { Colors } from '@/src/constants/Colors';
import { getInputToken } from '@/src/helpers/getInputToken';
import { Controller } from 'react-hook-form';
import { determineInputStateAndUpdateToken } from '@/src/helpers/determineInputStateAndUpdateToken';

export const Input = forwardRef<TextInput, Omit<InputProps, 'state'>>((props, ref) => {

    const {
        name,
        control,
        label = 'Label',
        withLabel = true,
        placeholder = 'placeholder',
        helpMessage = 'Help Message',
        helpMessageColor = Colors.surface.on,
        withHelpMessage = true,
        withLabelCheck = true,
        labelCheckLabel = 'Label',
        isCheckedLabelCheck = false,
        withHelpMessageAndLabelCheck,
        leftIcon,
        rightIcon,
        fnLeftIcon,
        autoCapitalize = 'none',
        fnRightIcon,
        fnHelpMessage,
        isAt,
        style,
        borderRadius,
        ...inputProps
    } = props;

    const inputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    const [isFocused, setIsFocused] = useState(false);
    const IsValidating = useRef(false);
    const [rawValue, setRawValue] = useState('');


    let token = getInputToken({ ...props, state: 'default' });

    const justifyContent = withHelpMessage ? 'space-between' : 'flex-end';

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value },
                fieldState: { error, invalid, isDirty, isValidating },
            }) => {
                token = determineInputStateAndUpdateToken({
                    isFocused,
                    isDirty,
                    invalid,
                    isValidating,
                    isValidatingRef: IsValidating,
                    props: { ...props, state: 'default' },
                });

                return (
                    <Pressable
                        style={[styles.mainContainer, token.mainContainer, style]}
                        onPress={() => inputRef.current?.focus()}
                    >
                        {withLabel && (
                            <Text style={[styles.label, token.label]}>
                                {label}
                            </Text>
                        )}

                        <View style={[styles.container, token.container]}>
                            <View style={[styles.leftIconAndInput, token.leftIconAndInput]}>
                                {leftIcon && (
                                    <TouchableOpacity onPress={fnLeftIcon} disabled={!fnLeftIcon}>
                                        {React.cloneElement(leftIcon, token.icon)}
                                    </TouchableOpacity>
                                )}

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {isAt && <Text style={styles.at}>@</Text>}
                                    <TextInput
                                        ref={inputRef}
                                        value={rawValue}
                                        autoCapitalize={autoCapitalize}
                                        onChangeText={(text) => {
                                            setRawValue(text);          // mantém espaços visíveis
                                            onChange(text.trim());      // envia valor limpo para validação
                                        }}
                                        onBlur={() => {
                                            onBlur();
                                            setIsFocused(false);
                                        }}
                                        onFocus={() => setIsFocused(true)}
                                        placeholder={placeholder}
                                        placeholderTextColor={token.placeholderTextColor}
                                        style={[styles.input, token.input]}
                                        {...inputProps}
                                    />
                                </View>
                            </View>

                            {rightIcon && (
                                <TouchableOpacity
                                    style={styles.rightIcon}
                                    onPress={fnRightIcon}
                                    disabled={!fnRightIcon}
                                >
                                    {React.cloneElement(rightIcon, token.icon)}
                                </TouchableOpacity>
                            )}
                        </View>

                        {withHelpMessageAndLabelCheck && (
                            <View
                                style={[
                                    styles.helpTextContainer,
                                    token.helpTextContainer,
                                    { justifyContent },
                                ]}
                            >
                                {withHelpMessage && (
                                    <TouchableOpacity onPress={fnHelpMessage} disabled={!fnHelpMessage}>
                                        <Text style={[styles.helpText, token.helpText, { color: helpMessageColor }]}>
                                            {helpMessage}
                                        </Text>
                                    </TouchableOpacity>
                                )}

                                {withLabelCheck && (
                                    <LabelCheck label={labelCheckLabel} isChecked={isCheckedLabelCheck} />
                                )}
                            </View>
                        )}

                        {error && error.message && (
                            <Text style={[styles.error, token.error]}>
                                {error.message}
                            </Text>
                        )}
                    </Pressable>
                )
            }}
        />
    );
});
