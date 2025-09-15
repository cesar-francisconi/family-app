import {
    View,
    TextInput,
} from 'react-native';
import { styles } from './styles';
import { SearchProps } from './types';
import {
    forwardRef,
    memo,
    useImperativeHandle,
    useRef,
} from 'react';
import { Colors } from '@/src/constants/Colors';
import { Button } from '../Button';
import {
    Controller,
} from 'react-hook-form';

const SearchBase = forwardRef<TextInput, SearchProps>((props, ref) => {

    const {
        control,
        name,
        buttonOptions = { title: 'Title', onPress: async () => { } },
    } = props;

    const inputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value },
            }) => {
                const trimmedInput = value.trim();
                const buttonDisabled = trimmedInput === '';

                return (
                    <View style={styles.container}>
                        <TextInput
                            ref={inputRef}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholderTextColor={Colors.surface.onVariant}
                            style={styles.input}
                            {...props}
                        />

                        <Button
                            onPress={buttonOptions.onPress}
                            title={buttonOptions.title}
                            type='primary'
                            disabled={buttonDisabled}
                            variant='filled'
                        />
                    </View>
                );
            }} />
    );
});

export const Search = memo(SearchBase);