import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { InputThreeGroup } from '@/src/components/InputThreeGroup';
import { VerticalButtonGroup } from '@/src/components/VerticalButtonGroup/Index';
import {
    EmailAuthProvider,
    getAuth,
    reauthenticateWithCredential,
    signOut,
    verifyBeforeUpdateEmail,
} from '@react-native-firebase/auth';
import { useState } from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { EmailChangeProps } from '../../screen/EmailChange/types';
import { styles } from '../../screen/EmailChange/styles';

export default function EmailChange(props: EmailChangeProps) {

    const { } = props;

    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const handleChangeEmail = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user?.email) return;

        if (confirmEmail !== user.email) {
            alert("O email confirmado não bate com o seu email de login.");
            return;
        }

        const credential = EmailAuthProvider.credential(confirmEmail, confirmPassword);

        try {
            await reauthenticateWithCredential(user, credential);
            await verifyBeforeUpdateEmail(user, newEmail);

            alert('Verificação enviada para o novo e-mail. Confirme para concluir a troca.');
            await signOut(auth);
        } catch (error: any) {
            const code = error.code;

            if (code === 'auth/invalid-credential') {
                console.log('Senha atual incorreta.');
            } else {
                console.log('Erro:', error.message);
            }
        }
    };

    const handleCancel = () => {
        setConfirmEmail('');
        setConfirmPassword('');
        setNewEmail('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <InputThreeGroup
                firstInput={
                    <Input
                        label='Confirme o email (atual) para mudar...'
                        placeholder=''
                        variant='outlined'
                        state='filled'
                        value={confirmEmail}
                        onChangeText={setConfirmEmail}
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
                        label='Confirme a senha (atual) para mudar...'
                        placeholder=''
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
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
                        label='Novo e-mail'
                        placeholder=''
                        value={newEmail}
                        onChangeText={setNewEmail}
                        variant='outlined'
                        state='filled'
                        leftIcon={
                            <Icon
                                name='MaterialCommunityIcons'
                                icon='email-outline'
                            />
                        }
                    />
                }
            />

            <VerticalButtonGroup
                firstButton={
                    <Button
                        onPress={handleChangeEmail}
                        title='Alterar'
                        type='primary'
                        variant='filled'
                    />
                }
                secondButton={
                    <Button
                        onPress={handleCancel}
                        title='Limpar'
                        type='primary'
                        variant='outlined'
                    />
                }
            />
        </SafeAreaView>
    );
}