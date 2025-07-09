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
    GoogleAuthProvider,
    reauthenticateWithCredential,
} from '@react-native-firebase/auth';
import {
    deleteDoc,
    doc,
    getFirestore,
} from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { getLoggedInUserIsGoogleAccount } from '@/src/hook/useUser';
import { handleDeleteGoogleUser } from '@/src/helpers/handleDeleteGoogleUser';
import { handleDeleteUser } from '@/src/helpers/handleDeleteUser';

export default function DeleteUser(props: DeleteUserProps) {

    const { } = props;

    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const isGoogleAccount = getLoggedInUserIsGoogleAccount();

    const handleClear = () => {
        setConfirmEmail('');
        setConfirmPassword('');
    };

    return (
        <SafeAreaView style={styles.container}>
            {isGoogleAccount ? (<Input
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
            />)
                :
                (<InputTwoGroup
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
                />)}

            <VerticalButtonGroup
                firstButton={
                    <Button
                        onPress={() => isGoogleAccount ? handleDeleteGoogleUser({ confirmEmail }) : handleDeleteUser({ confirmEmail, confirmPassword })}
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