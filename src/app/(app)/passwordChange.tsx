import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { InputThreeGroup } from '@/src/components/InputThreeGroup';
import { VerticalButtonGroup } from '@/src/components/VerticalButtonGroup/Index';
import { Colors } from '@/src/constants/Colors';
import { styles } from '@/src/screen/PasswordChange/styles';
import { PasswordChangeProps } from '@/src/screen/PasswordChange/types';
import {
    EmailAuthProvider,
    getAuth,
    reauthenticateWithCredential,
    signOut,
    updatePassword,
} from '@react-native-firebase/auth';
import { useState } from 'react';
import {
    Alert,
    SafeAreaView,
} from 'react-native';

export default function PasswordChange(props: PasswordChangeProps) {

    const { } = props;

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleChangePassword = async () => {
        if (newPassword !== confirmNewPassword) {
            return Alert.alert('', '"Nova senha" e "Confirmar a nova senha" precisam ser iguais!');
        }

        const auth = getAuth();
        const user = auth.currentUser;

        if (!user?.email) return;

        try {
            const credential = EmailAuthProvider.credential(user.email, currentPassword);
            await reauthenticateWithCredential(user, credential);
            await updatePassword(user, newPassword);

            Alert.alert('', 'Senha atualizada com sucesso!');
            await signOut(auth);
        } catch (error: any) {
            const message = error.code === 'auth/invalid-credential'
                ? 'Senha atual incorreta.'
                : 'Erro ao atualizar a senha.';

            console.log('Erro:', error.message);
            Alert.alert('', message);
        }
    };

    const handleClear = () => {
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <InputThreeGroup
                firstInput={
                    <Input
                        label='Senha atual'
                        placeholder=''
                        variant='outlined'
                        state='filled'
                        value={currentPassword}
                        onChangeText={setCurrentPassword}
                        withHelpMessageAndLabelCheck
                        withLabelCheck={false}
                        helpMessageColor={Colors.primary.main}
                        helpMessage='Esqueceu sua senha?'
                        leftIcon={
                            <Icon
                                name='Feather'
                                icon='lock'
                            />
                        }
                        rightIcon={
                            <Icon
                                name='Feather'
                                icon='eye-off'
                            />
                        }
                    />
                }
                secondInput={
                    <Input
                        label='Nova senha (6 a 20 caracteres)'
                        placeholder=''
                        value={newPassword}
                        onChangeText={setNewPassword}
                        variant='outlined'
                        state='filled'
                        leftIcon={
                            <Icon
                                name='Feather'
                                icon='lock'
                            />
                        }
                        rightIcon={
                            <Icon
                                name='Feather'
                                icon='eye-off'
                            />
                        }
                    />
                }
                tertiaryInput={
                    <Input
                        label='Confirmar a nova senha'
                        placeholder=''
                        variant='outlined'
                        value={confirmNewPassword}
                        onChangeText={setConfirmNewPassword}
                        state='filled'
                        leftIcon={
                            <Icon
                                name='Feather'
                                icon='lock'
                            />
                        }
                        rightIcon={
                            <Icon
                                name='Feather'
                                icon='eye-off'
                            />
                        }
                    />
                }
            />

            <VerticalButtonGroup
                firstButton={
                    <Button
                        onPress={handleChangePassword}
                        title='Alterar'
                        type='primary'
                        variant='filled'
                    />
                }
                secondButton={
                    <Button
                        onPress={handleClear}
                        title='Limpar'
                        type='primary'
                        variant='outlined'
                    />
                }
            />
        </SafeAreaView>
    );
}