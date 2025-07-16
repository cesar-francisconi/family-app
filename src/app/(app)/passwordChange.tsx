import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { InputThreeGroup } from '@/src/components/InputThreeGroup';
import { Colors } from '@/src/constants/Colors';
import {
    FormDataPasswordChange,
    formSchemaPasswordChange,
} from '@/src/helpers/formSchemaPasswordChange';
import { handleChangePassword } from '@/src/helpers/handleChangePassword';
import { styles } from '@/src/screen/PasswordChange/styles';
import { PasswordChangeProps } from '@/src/screen/PasswordChange/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    SafeAreaView,
} from 'react-native';

export default function PasswordChange(props: PasswordChangeProps) {

    const { } = props;

    const [isLoading, setIsLoading] = useState(false);

    const {
        control,
        handleSubmit,
        setError,
    } = useForm<FormDataPasswordChange>({
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
        },
        resolver: zodResolver(formSchemaPasswordChange),
    });

    const [isCurrentPasswordSecureTextEntry, setIsCurrentPasswordSecureTextEntry] = useState(true);
    const [isNewPasswordSecureTextEntry, setIsNewPasswordSecureTextEntry] = useState(true);
    const [isConfirmNewPasswordSecureTextEntry, setIsConfirmNewPasswordSecureTextEntry] = useState(true);

    const onSubmit = async (data: FormDataPasswordChange) => {
        setIsLoading(true);

        try {
            await handleChangePassword({
                currentPassword: data.currentPassword,
                newPassword: data.newPassword,
                confirmNewPassword: data.confirmNewPassword,
            });

        } catch (error: any) {
            if (error.code === 'auth/invalid-credential') {
                setError('currentPassword', {
                    type: 'manual',
                    message: 'Senha atual incorreta.',
                });
            } else if (error.code === 'new-password-mismatch') {
                setError('confirmNewPassword', {
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
                        name='currentPassword'
                        control={control}
                        withLabel={false}
                        placeholder='Senha atual aqui...'
                        variant='outlined'
                        fnRightIcon={() => {
                            setIsCurrentPasswordSecureTextEntry(isCurrentPasswordSecureTextEntry ? false : true);
                        }}
                        withLabelCheck={false}
                        secureTextEntry={isCurrentPasswordSecureTextEntry}
                        helpMessageColor={Colors.primary.main}
                        leftIcon={
                            <Icon
                                name='Feather'
                                icon='lock'
                            />
                        }
                        rightIcon={
                            <Icon
                                name='Feather'
                                icon={isCurrentPasswordSecureTextEntry ? 'eye-off' : 'eye'}
                            />
                        }
                    />
                }
                secondInput={
                    <Input
                        name='newPassword'
                        control={control}
                        placeholder='Nova senha (6 a 20 caracteres)'
                        variant='outlined'
                        withLabel={false}
                        secureTextEntry={isNewPasswordSecureTextEntry}
                        fnRightIcon={() => {
                            setIsNewPasswordSecureTextEntry(isNewPasswordSecureTextEntry ? false : true);
                        }}
                        leftIcon={
                            <Icon
                                name='Feather'
                                icon='lock'
                            />
                        }
                        rightIcon={
                            <Icon
                                name='Feather'
                                icon={isNewPasswordSecureTextEntry ? 'eye-off' : 'eye'}
                            />
                        }
                    />
                }
                tertiaryInput={
                    <Input
                        name='confirmNewPassword'
                        control={control}
                        placeholder='Confirmar a nova senha'
                        withLabel={false}
                        secureTextEntry={isConfirmNewPasswordSecureTextEntry}
                        variant='outlined'
                        fnRightIcon={() => {
                            setIsConfirmNewPasswordSecureTextEntry(isConfirmNewPasswordSecureTextEntry ? false : true);
                        }}
                        leftIcon={
                            <Icon
                                name='Feather'
                                icon='lock'
                            />
                        }
                        rightIcon={
                            <Icon
                                name='Feather'
                                icon={isConfirmNewPasswordSecureTextEntry ? 'eye-off' : 'eye'}
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