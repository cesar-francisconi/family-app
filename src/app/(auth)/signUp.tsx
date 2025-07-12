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

    const {
        control,
        handleSubmit,
    } = useForm<FormDataSignUp>({
        defaultValues: {
            email: "",
            name: "",
            lastName: "",
            password: "",
        },
        resolver: zodResolver(formSchemaSignUp),
    });

    const onSubmit = (data: FormDataSignUp) => {
        handleSignUp({
            email: data.email,
            name: data.name,
            lastName: data.lastName,
            password: data.password,
            setIsLoading,
        })
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
                                state='default'
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
                                state='default'
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
                                state='default'
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
                                state='default'
                                withLabel={false}
                                placeholder='Senha'
                                secureTextEntry
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
                                        icon='eye-off'
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
                    onPress={() => handleGoogleAuth('signUp')}
                    type='secondary'
                    variant='filled'
                    title='Cadastre com Google'
                    borderRadius='medium'
                    leftIcon={
                        <Icon
                            name='AntDesign'
                            icon='google'
                        />
                    }
                />

                <AuthSuggestion
                    firstText='Já tem cadastro?'
                    secondText='Acesse sua conta.'
                    fnSecondText={() => {
                        route.back();
                    }}
                />
            </View>
        </SafeAreaView>
    );
}