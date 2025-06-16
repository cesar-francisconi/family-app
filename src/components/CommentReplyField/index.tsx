import {
    TextInput,
    View,
} from 'react-native';
import {
    forwardRef,
    useState,
} from 'react';
import { styles } from './styles';
import { Avatar } from '../Avatar';
import {
    CommentReplyFieldProps,
} from './types';
import { useUser } from '@/src/hook/useUser';
import { Button } from '../Button';
import { Icon } from '../Icon';

export const CommentReplyField = forwardRef<TextInput, CommentReplyFieldProps>((props, ref) => {

    const {
        editable = true,
        fnButton,
        buttonDisabled,
    } = props;

    const [onFocus, setOnFocus] = useState(false);

    const loggedInUserAvatar = useUser((state) => state.avatar);

    const borderWidth = onFocus ? 1 : 0;

    return (
        <View
            style={styles.container}
        >
            <Avatar
                mode='image'
                imageUrl={loggedInUserAvatar}
                size='small'
            />

            <TextInput
                autoCorrect={false}
                style={[styles.input, {
                    borderWidth,
                }]}
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
                {...props}
                ref={ref}
            />

            {editable && <Button
                onPress={fnButton}
                disabled={buttonDisabled}
                type="primary"
                variant="filled"
                size='small'
                borderRadius='large'
                leftIcon={<Icon name="Ionicons" icon="send" />}
            />}
        </View>
    );
});


