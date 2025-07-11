import React, { forwardRef } from 'react';
import {
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

export const Input = forwardRef<TextInput, InputProps>((props, ref) => {

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
        fnRightIcon,
        fnHelpMessage,
        style,
        ...inputProps
    } = props;

    const token = getInputToken(props);

    const justifyContent = withHelpMessage ? 'space-between' : 'flex-end';

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
            }) => (
                <View style={[styles.mainContainer, token.mainContainer, style]}>
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

                            <TextInput
                                ref={ref}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                placeholder={placeholder}
                                placeholderTextColor={token.placeholderTextColor}
                                style={[styles.input, token.input]}
                                {...inputProps}
                            />
                        </View>

                        {rightIcon && (
                            <TouchableOpacity onPress={fnRightIcon} disabled={!fnRightIcon}>
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

                    {error && (
                        <Text style={[styles.error, token.error]}>
                            {error.message}
                        </Text>
                    )}
                </View>
            )}
        />
    );
});
