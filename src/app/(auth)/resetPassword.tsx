import { Button } from '@/src/components/Button';
import { Input } from '@/src/components/Input';
import { Welcome } from '@/src/components/Welcome';
import { styles } from '@/src/screen/ResetPassword/styles';
import { ResetPasswordProps } from '@/src/screen/ResetPassword/types';
import { getAuth, sendPasswordResetEmail } from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    View,
} from 'react-native';

export default function ResetPassword(props: ResetPasswordProps) {

    const { } = props;

    const [email, setEmail] = useState('');

    const route = useRouter();

    const handleSendPasswordResetEmail = () => {
        const auth = getAuth();

        sendPasswordResetEmail(auth, email)
            .then(() => {
                Alert.alert('', 'Se este e-mail estiver cadastrado, enviaremos um link para redefinir sua senha.');

                route.back();
            })
            .catch((error) => {
                console.error('Erro ao enviar o email:', error.message);
            });
    };

    const handleClear = () => {
        setEmail('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Welcome
                title={'Recuperar senha'}
                description={'Informe o e-mail cadastrado para receber' + '\n' + 'um link de redefinição de senha.'}
            />

            <View
                style={styles.actionContainer}
            >

                <Input
                    state='filled'
                    variant='filled'
                    value={email}
                    placeholder='Seu e-mail cadastrado aqui...'
                    withLabel={false}
                    onChangeText={setEmail}
                />

                <Button
                    onPress={handleSendPasswordResetEmail}
                    title='Enviar'
                    type='primary'
                    variant='filled'
                    borderRadius='medium'
                />
            </View>
        </SafeAreaView>
    );
}