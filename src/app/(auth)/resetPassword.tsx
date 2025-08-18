import { Button } from '@/src/components/Button';
import { Input } from '@/src/components/Input';
import { Welcome } from '@/src/components/Welcome';
import { FormDataResetPassword, formSchemaResetPassword } from '@/src/helpers/formSchemaResetPassword';
import { styles } from '@/src/screen/ResetPassword/styles';
import { ResetPasswordProps } from '@/src/screen/ResetPassword/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { getAuth, sendPasswordResetEmail } from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    Alert,
    SafeAreaView,
    View,
} from 'react-native';
import Toast from 'react-native-toast-message';

export default function ResetPassword(props: ResetPasswordProps) {

    const { } = props;

    const {
        control,
        handleSubmit,
        setError,
    } = useForm<FormDataResetPassword>({
        defaultValues: {
            resetEmail: "",
        },
        resolver: zodResolver(formSchemaResetPassword),
    });

    const [isLoading, setIsLoading] = useState(false);

    const route = useRouter();

    const onSubmit = async (data: FormDataResetPassword) => {
        setIsLoading(true);

        const auth = getAuth();

        try {
            await sendPasswordResetEmail(auth, data.resetEmail);

            Toast.show({
                type: 'customSuccess',
                text1: 'Verifique seu e-mail!',
                text2: 'Se este e-mail estiver cadastrado, enviaremos um link para redefinir sua senha.',
                position: 'top',
                visibilityTime: 6000,
            });

            route.back();
        } catch (error: any) {
            console.error('Erro ao enviar o email:', error.message);

            setIsLoading(false);
        };
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
                    name='resetEmail'
                    control={control}
                    variant='filled'
                    keyboardType='email-address'
                    placeholder='Seu e-mail cadastrado aqui...'
                    withLabel={false}
                />

                <Button
                    onPress={handleSubmit(onSubmit)}
                    title='Enviar'
                    type='primary'
                    isLoading={isLoading}
                    variant='filled'
                    borderRadius='medium'
                />
            </View>
        </SafeAreaView>
    );
}