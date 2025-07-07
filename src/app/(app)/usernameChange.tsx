import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { Colors } from '@/src/constants/Colors';
import { checkIfUsernameAlreadyExists } from '@/src/helpers/checkIfUsernameAlreadyExists';
import { getLoggedInUserUsername, setLoggedInUser } from '@/src/hook/useUser';
import { styles } from '@/src/screen/UsernameChange/styles';
import { UsernameChangeProps } from '@/src/screen/UsernameChange/types';
import { getAuth } from '@react-native-firebase/auth';
import {
    doc,
    getFirestore,
    updateDoc,
} from '@react-native-firebase/firestore';
import { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    Text,
} from 'react-native';

export default function UsernameChange(props: UsernameChangeProps) {

    const { } = props;

    const [newUsername, setNewUsername] = useState('');

    const handleChangeUsername = async () => {
        const db = getFirestore();
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            Alert.alert('Erro', 'Usuário não está autenticado.');
            return;
        }

        const trimmedUsername = newUsername.trim();
        if (!trimmedUsername) {
            Alert.alert('Erro', 'Digite um nome de usuário válido.');
            return;
        }

        const sanitizedUsername = trimmedUsername.replace(/^@+/, ''); // remove qualquer @ no começo

        if (/\s/.test(sanitizedUsername)) {
            Alert.alert('Erro', 'Não é permitido usar espaços no nome de usuário.');
            return;
        }

        const newUsernameWithAt = `@${sanitizedUsername}`;

        // Verifica se já existe um documento com esse username
        const usernameAlreadyExists = await checkIfUsernameAlreadyExists(newUsernameWithAt);

        if (usernameAlreadyExists) {
            Alert.alert('Erro', 'Este nome de usuário já está em uso.');
            return;
        }

        // Atualiza o username do usuário atual
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
            username: newUsernameWithAt,
        });

        Alert.alert('Sucesso', 'Nome de usuário alterado com sucesso!');
        setLoggedInUser();
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
                placeholder='Seu novo usuário aqui...'
                variant='outlined'
                withLabel={false}
                state='filled'
                value={newUsername}
                onChangeText={setNewUsername}
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
                onPress={handleChangeUsername}
                title='Alterar'
                type='primary'
                variant='filled'
                borderRadius='medium'
            />
        </SafeAreaView>
    );
}