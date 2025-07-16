import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { useState } from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { InputTwoGroup } from '../../components/InputTwoGroup';
import { DeleteUserProps } from '../../screen/DeleteUser/types';
import { styles } from '../../screen/DeleteUser/styles';
import { getLoggedInUserIsGoogleAccount } from '@/src/hook/useUser';
import { handleDeleteGoogleUser } from '@/src/helpers/handleDeleteGoogleUser';
import { handleDeleteUser } from '@/src/helpers/handleDeleteUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
    FormDataDeleteUser,
    formSchemaDeleteUser,
} from '@/src/helpers/formSchemaDeleteUser';
import {
    FormDataDeleteGoogleUser,
    formSchemaDeleteGoogleUser,
} from '@/src/helpers/formSchemaDeleteGoogleUser';

export default function DeleteUser(props: DeleteUserProps) {

    const { } = props;

    const isGoogleAccount = getLoggedInUserIsGoogleAccount();

    const form = isGoogleAccount
        ? useForm<FormDataDeleteGoogleUser>({
            defaultValues: { confirmEmail: '' },
            resolver: zodResolver(formSchemaDeleteGoogleUser),
        })
        : useForm<FormDataDeleteUser>({
            defaultValues: { confirmEmail: '', confirmPassword: '' },
            resolver: zodResolver(formSchemaDeleteUser),
        });

    const { control, handleSubmit, setError } = form;

    const [isLoading, setIsLoading] = useState(false);
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

    const onSubmit = async (data: FormDataDeleteUser | FormDataDeleteGoogleUser) => {
        setIsLoading(true);

        let handle;
        if (isGoogleAccount) {
            handle = handleDeleteGoogleUser({ confirmEmail: data.confirmEmail });
        } else {
            // Type guard: data is FormDataDeleteUser here
            handle = handleDeleteUser({
                confirmEmail: data.confirmEmail,
                confirmPassword: (data as FormDataDeleteUser).confirmPassword,
            });
        }

        try {
            await handle;

        } catch (error: any) {
            if (error.code === 'confirmed-email-mismatch') {
                setError('confirmEmail', {
                    type: 'manual',
                    message: error.message,
                });
            } else if (error.code === 'auth/invalid-credential') {
                if (!isGoogleAccount) {
                    (setError as (name: 'confirmPassword', error: { type: string; message: string }) => void)(
                        'confirmPassword',
                        {
                            type: 'manual',
                            message: 'A senha confirmada não bate com a sua senha de login. Verifique se você digitou corretamente.',
                        }
                    );
                }
            }
        } finally {
            setIsLoading(false);
        };
    };

    return (
        <SafeAreaView style={styles.container}>
            {isGoogleAccount ? (<Input
                name='confirmEmail'
                control={control}
                label='Confirme seu email para excluir conta...'
                placeholder=''
                variant='outlined'
                leftIcon={
                    <Icon
                        name='MaterialCommunityIcons'
                        icon='email-outline'
                    />
                }
            />)
                :
                (<InputTwoGroup
                    firstInput={
                        <Input
                            name='confirmEmail'
                            control={control}
                            withLabel={false}
                            placeholder='E-mail atual para excluir conta...'
                            variant='outlined'
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
                            placeholder='Senha atual para excluir conta...'
                            secureTextEntry={isSecureTextEntry}
                            fnRightIcon={() => {
                                setIsSecureTextEntry(isSecureTextEntry ? false : true);
                            }}
                            variant='outlined'
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
                />)}

            <Button
                onPress={handleSubmit(onSubmit)}
                isLoading={isLoading}
                title='Excluir'
                type='primary'
                variant='filled'
                borderRadius='medium'
            />
        </SafeAreaView>
    );
}