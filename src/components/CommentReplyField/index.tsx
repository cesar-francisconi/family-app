import {
    TextInput,
    View,
} from 'react-native';
import {
    forwardRef,
    memo,
    useState,
} from 'react';
import { styles } from './styles';
import { Avatar } from '../Avatar';
import {
    CommentReplyFieldProps,
} from './types';
import {
    getLoggedInUserAvatar,
    getLoggedInUserUsername,
} from '@/src/hook/useUser';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { getInitialsFromUsername } from '@/src/helpers/getInitialsFromUsername';

const CommentReplyField = forwardRef<TextInput, CommentReplyFieldProps>((props, ref) => {

    const {
        editable = true,
        buttonOptions,
    } = props;

    const {
        onPress,
        disabled,
        isLoading,
        leftIcon = <Icon name="Ionicons" icon="send" />,
    } = buttonOptions ?? {};

    const [onFocus, setOnFocus] = useState(false);

    const username = getLoggedInUserUsername();
    const avatar = getLoggedInUserAvatar();

    const borderWidth = onFocus ? 1 : 0;

    if (!username) return;

    return (
        <View
            style={styles.container}
        >
            {avatar ? (<Avatar
                mode='image'
                imageUrl={avatar}
                size='small'
            />)
                :
                (<Avatar
                    mode='initial'
                    initial={getInitialsFromUsername(username)}
                    size='small'
                />)}

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
                onPress={onPress}
                disabled={disabled}
                isLoading={isLoading}
                type="primary"
                variant="filled"
                size='small'
                borderRadius='large'
                leftIcon={leftIcon}
            />}
        </View>
    );
});

export default memo(CommentReplyField);