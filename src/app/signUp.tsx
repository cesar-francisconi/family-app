import { AuthSuggestion } from '@/src/components/AuthSuggestion';
import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { InputThreeGroup } from '@/src/components/InputThreeGroup';
import { Or } from '@/src/components/Or';
import { VerticalButtonGroup } from '@/src/components/VerticalButtonGroup/Index';
import { Welcome } from '@/src/components/Welcome';
import { styles } from '@/src/screen/SignUp/styles';
import { SignUpProps } from '@/src/screen/SignUp/types';
import { useRouter } from 'expo-router';
import {
    SafeAreaView,
    View,
} from 'react-native';

export default function SignUp(props: SignUpProps) {

    const { } = props;

    const route = useRouter();

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
                    <InputThreeGroup
                        firstInput={
                            <Input
                                variant='filled'
                                state='default'
                                withLabel={false}
                                placeholder='Seu e-mail aqui...'
                                keyboardType='email-address'
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
                                withLabel={false}
                                placeholder='Seu username aqui...'
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
                                withLabel={false}
                                placeholder='Sua senha aqui...'
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
                        type='primary'
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