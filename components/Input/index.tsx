import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { InputProps } from './types';
import { LabelCheck } from '../LabelCheck';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { getInputToken } from '@/helpers/getInputToken';
import { Icon } from '../Icon';

export function Input(props: InputProps & TextInputProps) {

    const {
        showLabel = true,
        label = 'Label',
        leftIcon = <Icon
            name='Entypo'
            icon='chevron-thin-right'
        />,
        rightIcon = <Icon
            name='Entypo'
            icon='chevron-thin-right'
        />,
        fnLeftIcon,
        fnRightIcon,
        showHelpMessageAndLabelCheck,
        showHelpMessage = true,
        helpMessage = 'Help Message',
        helpMessageColor = Colors.surface.on,
        fnHelpMessage,
        showLabelCheck = true,
        labelCheckLabel = 'Label',
        checkedLabelCheck = false,
        isError,
        errorMessage = 'Error Message',
        placeholder = 'Placeholder',
    } = props;

    const { borderRadius, ...newProps } = props;

    const token = getInputToken(props);

    const mainContainer = StyleSheet.flatten(token.mainContainer);
    const labelStyle = StyleSheet.flatten(token.label);
    const container = StyleSheet.flatten(token.container);
    const leftIconAndInput = StyleSheet.flatten(token.leftIconAndInput);
    const icon = StyleSheet.flatten(token.icon);
    const placeholderTextColor = token.placeholderTextColor;
    const input = StyleSheet.flatten(token.input);
    const helpTextContainer = StyleSheet.flatten(token.helpTextContainer);
    const helpText = StyleSheet.flatten(token.helpText);
    const error = StyleSheet.flatten(token.error);

    return (
        <View style={[styles.mainContainer, mainContainer]}>
            {showLabel && <Text
                style={[styles.label, labelStyle]}
            >
                {label}
            </Text>}

            <View style={[styles.container, container]}>
                <View
                    style={[styles.leftIconAndInput, leftIconAndInput]}
                >
                    <TouchableOpacity
                        onPress={fnLeftIcon}
                        disabled={fnLeftIcon ? false : true}
                    >
                        {leftIcon && React.cloneElement(leftIcon, icon)}
                    </TouchableOpacity>

                    <TextInput
                        placeholderTextColor={placeholderTextColor}
                        placeholder={placeholder}
                        style={[styles.input, input]}
                        {...newProps}
                    />
                </View>

                <TouchableOpacity
                    onPress={fnRightIcon}
                    disabled={fnRightIcon ? false : true}
                >
                    {rightIcon && React.cloneElement(rightIcon, icon)}
                </TouchableOpacity>
            </View>

            {
                showHelpMessageAndLabelCheck && <View
                    style={[styles.helpTextContainer, helpTextContainer, {
                        justifyContent: showHelpMessage ? 'space-between' : 'flex-end',
                    }]}
                >
                    <TouchableOpacity
                        onPress={fnHelpMessage}
                        disabled={fnHelpMessage ? false : true}
                    >
                        {showHelpMessage && helpMessageColor && <Text
                            style={[styles.helpText, helpText, {
                                color: helpMessageColor,
                            }]}
                        >
                            {helpMessage}
                        </Text>}
                    </TouchableOpacity>

                    {showLabelCheck && labelCheckLabel && < LabelCheck
                        label={labelCheckLabel}
                        checked={checkedLabelCheck}
                    />}
                </View>
            }

            {
                isError && <Text
                    style={[styles.error, error]}
                >
                    {errorMessage}
                </Text>
            }
        </View >
    );
}

