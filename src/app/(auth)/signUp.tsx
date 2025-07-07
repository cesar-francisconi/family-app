import { AuthSuggestion } from '@/src/components/AuthSuggestion';
import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { InputFourthGroup } from '@/src/components/InputFourthGroup';
import { Or } from '@/src/components/Or';
import { VerticalButtonGroup } from '@/src/components/VerticalButtonGroup/Index';
import { Welcome } from '@/src/components/Welcome';
import { handleSignUp } from '@/src/helpers/handleSignUp';
import { styles } from '@/src/screen/SignUp/styles';
import { SignUpProps } from '@/src/screen/SignUp/types';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    SafeAreaView,
    View,
} from 'react-native';

export default function SignUp(props: SignUpProps) {

    const { } = props;

    const route = useRouter();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
                                variant='filled'
                                state='default'
                                withLabel={false}
                                placeholder='E-mail'
                                value={email}
                                onChangeText={setEmail}
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
                                variant='filled'
                                state='default'
                                value={name}
                                onChangeText={setName}
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
                                variant='filled'
                                state='default'
                                value={lastName}
                                onChangeText={setLastName}
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
                                variant='filled'
                                state='default'
                                withLabel={false}
                                placeholder='Senha'
                                value={password}
                                onChangeText={setPassword}
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
                        onPress={() => handleSignUp({
                            email,
                            name,
                            lastName,
                            password,
                            setIsLoading,
                        })}
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

                <VerticalButtonGroup
                    firstButton={
                        <Button
                            type='secondary'
                            variant='filled'
                            title='Cadastre com Google'
                            leftIcon={
                                <Icon
                                    name='AntDesign'
                                    icon='google'
                                />
                            }
                        />
                    }
                    secondButton={
                        <Button
                            type='secondary'
                            variant='filled'
                            title='Cadastre com Facebook'
                            leftIcon={
                                <Icon
                                    name='MaterialCommunityIcons'
                                    icon='facebook'
                                />
                            }
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