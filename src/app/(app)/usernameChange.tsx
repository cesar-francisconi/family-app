import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { Colors } from '@/src/constants/Colors';
import {
    FormDataUsernameChange,
    formSchemaUsernameChange,
} from '@/src/helpers/formSchemaUsernameChange';
import { handleChangeUsername } from '@/src/helpers/handleChangeUsername';
import {
    getLoggedInUserUsername,
} from '@/src/hook/useUser';
import { styles } from '@/src/screen/UsernameChange/styles';
import { UsernameChangeProps } from '@/src/screen/UsernameChange/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    SafeAreaView,
    Text,
} from 'react-native';

export default function UsernameChange(props: UsernameChangeProps) {

    const { } = props;

    const [isLoading, setIsLoading] = useState(false);

    const {
        control,
        handleSubmit,
        setError,
    } = useForm<FormDataUsernameChange>({
        defaultValues: {
            newUsername: "",
        },
        resolver: zodResolver(formSchemaUsernameChange),
    });

    const onSubmit = async (data: FormDataUsernameChange) => {
        setIsLoading(true);

        try {
            await handleChangeUsername({ newUsername: data.newUsername });

        } catch (error: any) {
            if (error.code === 'username-already-in-use') {
                setError('newUsername', {
                    type: 'manual',
                    message: error.message,
                });
            }
        } finally {
            setIsLoading(false);
        };
    };

    const username = getLoggedInUserUsername();

    if (!username) return;

    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={styles.containerCurrentUsername}
            >
                Usuário atual: <Text
                    style={styles.currentUsername}
                >
                    {username}
                </Text>
            </Text>

            <Input
                name='newUsername'
                control={control}
                placeholder='Seu novo usuário aqui...'
                variant='outlined'
                withLabel={false}
                state='filled'
                withLabelCheck={false}
                helpMessageColor={Colors.primary.main}
                leftIcon={
                    <Icon
                        name='Feather'
                        icon='user'
                    />
                }
            />

            <Button
                onPress={handleSubmit(onSubmit)}
                title='Alterar'
                type='primary'
                variant='filled'
                borderRadius='medium'
                isLoading={isLoading}
            />
        </SafeAreaView>
    );
}