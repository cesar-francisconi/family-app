import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { InputThreeGroup } from '@/src/components/InputThreeGroup';
import { VerticalButtonGroup } from '@/src/components/VerticalButtonGroup/Index';
import { Colors } from '@/src/constants/Colors';
import { styles } from '@/src/screen/PasswordChange/styles';
import { PasswordChangeProps } from '@/src/screen/PasswordChange/types';
import {
    SafeAreaView,
} from 'react-native';

export default function PasswordChange(props: PasswordChangeProps) {

    const { } = props;

    return (
        <SafeAreaView style={styles.container}>
            <InputThreeGroup
                firstInput={
                    <Input
                        label='Senha atual'
                        placeholder=''
                        variant='outlined'
                        state='default'
                        withHelpMessageAndLabelCheck
                        withLabelCheck={false}
                        helpMessageColor={Colors.primary.main}
                        helpMessage='Esqueceu sua senha?'
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
                secondInput={
                    <Input
                        label='Nova senha (6 a 20 caracteres)'
                        placeholder=''
                        variant='outlined'
                        state='default'
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
                        label='Confirmar a nova senha'
                        placeholder=''
                        variant='outlined'
                        state='default'
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
                        title='Salvar'
                        type='primary'
                        variant='filled'
                    />
                }
                secondButton={
                    <Button
                        title='Cancelar'
                        type='primary'
                        variant='outlined'
                    />
                }
            />
        </SafeAreaView>
    );
}