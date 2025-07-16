import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { InputThreeGroup } from '@/src/components/InputThreeGroup';
import { useState } from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { EmailChangeProps } from '../../screen/EmailChange/types';
import { styles } from '../../screen/EmailChange/styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    FormDataEmailChange,
    formSchemaEmailChange,
} from '@/src/helpers/formSchemaEmailChange';
import { handleChangeEmail } from '@/src/helpers/handleChangeEmail';

export default function EmailChange(props: EmailChangeProps) {

    const { } = props;

    const [isLoading, setIsLoading] = useState(false);

    const {
        control,
        handleSubmit,
        setError,
    } = useForm<FormDataEmailChange>({
        defaultValues: {
            confirmEmail: "",
            confirmPassword: "",
            newEmail: "",
        },
        resolver: zodResolver(formSchemaEmailChange),
    });

    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

    const onSubmit = async (data: FormDataEmailChange) => {
        setIsLoading(true);

        try {
            await handleChangeEmail({ confirmEmail: data.confirmEmail, confirmPassword: data.confirmPassword, newEmail: data.newEmail });

        } catch (error: any) {
            if (error.code === 'auth/invalid-credential') {
                setError('confirmPassword', {
                    type: 'manual',
                    message: 'A senha confirmada não bate com a sua senha de login. Verifique se você digitou corretamente.',
                });
            } else if (error.code === 'confirmed-email-mismatch') {
                setError('confirmEmail', {
                    type: 'manual',
                    message: error.message,
                });
            }
        } finally {
            setIsLoading(false);
        };
    };

    return (
        <SafeAreaView style={styles.container}>
            <InputThreeGroup
                firstInput={
                    <Input
                        name='confirmEmail'
                        control={control}
                        withLabel={false}
                        placeholder='Confirme seu e-mail (atual) aqui...'
                        variant='outlined'
                        autoCorrect={false}
                        leftIcon={
                            <Icon
                                name='MaterialCommunityIcons'
                                icon='email-outline'
                            />
                        }
                    />
                }
                secondInput={
                    <Input
                        name='confirmPassword'
                        control={control}
                        withLabel={false}
                        fnRightIcon={() => {
                            setIsSecureTextEntry(isSecureTextEntry ? false : true);
                        }}
                        placeholder='Confirme sua senha (atual) aqui...'
                        secureTextEntry={isSecureTextEntry}
                        variant='outlined'
                        autoCorrect={false}
                        leftIcon={
                            <Icon
                                name='Feather'
                                icon='lock'
                            />
                        }
                        rightIcon={
                            <Icon
                                name='Feather'
                                icon={isSecureTextEntry ? 'eye-off' : 'eye'}
                            />
                        }
                    />
                }
                tertiaryInput={
                    <Input
                        name='newEmail'
                        control={control}
                        withLabel={false}
                        autoCorrect={false}
                        placeholder='Novo e-mail aqui...'
                        variant='outlined'
                        leftIcon={
                            <Icon
                                name='MaterialCommunityIcons'
                                icon='email-outline'
                            />
                        }
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