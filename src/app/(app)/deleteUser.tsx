import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { VerticalButtonGroup } from '@/src/components/VerticalButtonGroup/Index';
import { useState } from 'react';
import {
    Alert,
    SafeAreaView,
} from 'react-native';
import { InputTwoGroup } from '../../components/InputTwoGroup';
import { DeleteUserProps } from '../../screen/DeleteUser/types';
import { styles } from '../../screen/DeleteUser/styles';
import {
    deleteUser,
    EmailAuthProvider,
    getAuth,
    reauthenticateWithCredential,
} from '@react-native-firebase/auth';
import {
    deleteDoc,
    doc,
    getFirestore,
} from '@react-native-firebase/firestore';

export default function DeleteUser(props: DeleteUserProps) {

    const { } = props;

    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleDeleteUser = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user?.email) return;

        if (confirmEmail !== user.email) {
            Alert.alert('Erro', 'O email confirmado não bate com o seu email de login.');
            return;
        }

        const credential = EmailAuthProvider.credential(confirmEmail, confirmPassword);

        try {
            await reauthenticateWithCredential(user, credential);

            const db = getFirestore();
            const userRef = doc(db, 'users', user.uid);
            await deleteDoc(userRef);

            await deleteUser(user);
            Alert.alert('Sucesso', 'Conta do usuário deletada!');
        } catch (error: any) {
            if (error.code === 'auth/invalid-credential') {
                Alert.alert('Erro', 'Senha atual incorreta.');
            } else {
                Alert.alert('Erro', error.message || 'Erro ao deletar conta.');
            }
        }
    };

    const handleClear = () => {
        setConfirmEmail('');
        setConfirmPassword('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <InputTwoGroup
                firstInput={
                    <Input
                        label='Confirme seu email para excluir conta...'
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
                        label='Confirme sua senha para excluir conta...'
                        placeholder=''
                        value={confirmPassword}
                        secureTextEntry
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
            />

            <VerticalButtonGroup
                firstButton={
                    <Button
                        onPress={handleDeleteUser}
                        title='Excluir'
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