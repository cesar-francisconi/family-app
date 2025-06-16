import {
    View,
    TextInput,
} from 'react-native';
import { styles } from './styles';
import { SearchProps } from './types';
import { forwardRef } from 'react';
import { Colors } from '@/src/constants/Colors';
import { Button } from '../Button';

export const Search = forwardRef<TextInput, SearchProps>((props, ref) => {

    const {
        fnButton,
        buttonTitle = 'Title',
        buttonDisabled = true,
    } = props;

    return (
        <View style={styles.container}>
            <TextInput
                ref={ref}
                placeholderTextColor={Colors.surface.onVariant}
                style={styles.input}
                {...props}
            />

            <Button
                onPress={fnButton}
                title={buttonTitle}
                type='primary'
                disabled={buttonDisabled}
                variant='filled'
            />
        </View>
    );
});

