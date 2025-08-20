import { AuthSuggestion } from '@/src/components/AuthSuggestion';
import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { InputFourthGroup } from '@/src/components/InputFourthGroup';
import { Or } from '@/src/components/Or';
import { Welcome } from '@/src/components/Welcome';
import { handleSignUp } from '@/src/helpers/handleSignUp';
import { handleGoogleAuth } from '@/src/helpers/handleGoogleAuth';
import { styles } from '@/src/screen/SignUp/styles';
import { SignUpProps } from '@/src/screen/SignUp/types';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    SafeAreaView,
    View,
} from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormDataSignUp, formSchemaSignUp } from '@/src/helpers/formSchemaSignUp';

export default function SignUp(props: SignUpProps) {

    const { } = props;

    const route = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
    const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);

    const {
        control,
        handleSubmit,
        setError,
    } = useForm<FormDataSignUp>({
        defaultValues: {
            email: "",
            name: "",
            lastName: "",
            password: "",
        },
        resolver: zodResolver(formSchemaSignUp),
    });

    const onSubmit = async (data: FormDataSignUp) => {
        setIsLoading(true);

        try {
            await handleSignUp({
                email: data.email,
                name: data.name,
                lastName: data.lastName,
                password: data.password,
            })

        } catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                setError('email', {
                    type: 'manual',
                    message: 'E-mail já cadastrado.',
                });
            } else {
                setError('email', {
                    type: 'manual',
                    message: 'Erro ao tentar fazer login.',
                });
            }
        } finally {
            setIsLoading(false);
        };
    };

    return (
        <SafeAreaView style={styles.container}>
            <Welcome
                title={'Registrar'}
                description='Crie uma conta para continuar'
            />

            <View
                style={styles.actionContainer}
            >
                <View
                    style={styles.firstActionContainer}
                >
                    <InputFourthGroup
                        firstInput={
                            <Input
                                name='email'
                                control={control}
                                variant='filled'
                                withLabel={false}
                                placeholder='E-mail'
                                keyboardType='email-address'
                                textContentType='emailAddress'
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
                                name='name'
                                control={control}
                                variant='filled'
                                withLabel={false}
                                textContentType='name'
                                placeholder='Nome'
                                leftIcon={
                                    <Icon
                                        name='Feather'
                                        icon='user'
                                    />
                                }
                            />
                        }

                        tertiaryInput={
                            <Input
                                name='lastName'
                                control={control}
                                variant='filled'
                                withLabel={false}
                                placeholder='Sobrenome'
                                textContentType='name'
                                leftIcon={
                                    <Icon
                                        name='Feather'
                                        icon='user'
                                    />
                                }
                            />
                        }

                        fourthInput={
                            <Input
                                name='password'
                                control={control}
                                variant='filled'
                                withLabel={false}
                                placeholder='Senha'
                                secureTextEntry={isSecureTextEntry}
                                fnRightIcon={() => {
                                    setIsSecureTextEntry(isSecureTextEntry ? false : true);
                                }}
                                textContentType='password'
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
                    />

                    <Button
                        onPress={handleSubmit(onSubmit)}
                        type='primary'
                        isLoading={isLoading}
                        variant='filled'
                        size='medium'
                        title='Cadastrar'
                        borderRadius='medium'
                    />
                </View>

                <Or
                    text='Ou'
                />

                <Button
                    onPress={async () => {
                        setIsLoadingGoogle(true);

                        await handleGoogleAuth('signUp')

                        setIsLoadingGoogle(false);
                    }}
                    type='secondary'
                    variant='filled'
                    title='Cadastre com Google'
                    borderRadius='medium'
                    isLoading={isLoadingGoogle}
                    leftIcon={
                        <Icon
                            name='AntDesign'
                            icon='google'
                        />
                    }
                />

                <AuthSuggestion
                    message='Já tem cadastro?'
                    actionLabel='Acesse sua conta.'
                    fnActionPress={() => {
                        route.back();
                    }}
                />
            </View>
        </SafeAreaView>
    );
}