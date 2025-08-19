import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { useState } from 'react';
import {
    Keyboard,
    SafeAreaView,
} from 'react-native';
import { InputTwoGroup } from '../../components/InputTwoGroup';
import { DeleteUserProps } from '../../screen/DeleteUser/types';
import { styles } from '../../screen/DeleteUser/styles';
import { getLoggedInUserIsGoogleAccount } from '@/src/hook/useUser';
import { handleDeleteGoogleUser } from '@/src/helpers/handleDeleteGoogleUser';
import { handleDeleteUser } from '@/src/helpers/handleDeleteUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
    FormDataDeleteUser,
    formSchemaDeleteUser,
} from '@/src/helpers/formSchemaDeleteUser';
import {
    FormDataDeleteGoogleUser,
    formSchemaDeleteGoogleUser,
} from '@/src/helpers/formSchemaDeleteGoogleUser';
import { setConfirmDeleteUserModal } from '@/src/hook/useConfirmDeleteUserModal';

export default function DeleteUser(props: DeleteUserProps) {

    const { } = props;

    const isGoogleAccount = getLoggedInUserIsGoogleAccount();

    const form = isGoogleAccount
        ? useForm<FormDataDeleteGoogleUser>({
            defaultValues: { confirmEmail: '' },
            resolver: zodResolver(formSchemaDeleteGoogleUser),
        })
        : useForm<FormDataDeleteUser>({
            defaultValues: { confirmEmail: '', confirmPassword: '' },
            resolver: zodResolver(formSchemaDeleteUser),
        });

    const { control, handleSubmit, setError } = form;

    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

    const onSubmit = async (data: FormDataDeleteUser | FormDataDeleteGoogleUser) => {
        Keyboard.dismiss();

        setConfirmDeleteUserModal({
            isOpen: true,
            data,
            setError,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            {isGoogleAccount ? (<Input
                name='confirmEmail'
                control={control}
                placeholder='E-mail atual para excluir conta...'
                withLabel={false}
                variant='outlined'
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
                            name='confirmEmail'
                            control={control}
                            withLabel={false}
                            placeholder='E-mail atual para excluir conta...'
                            variant='outlined'
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
                            name='confirmPassword'
                            control={control}
                            withLabel={false}
                            placeholder='Senha atual para excluir conta...'
                            secureTextEntry={isSecureTextEntry}
                            fnRightIcon={() => {
                                setIsSecureTextEntry(isSecureTextEntry ? false : true);
                            }}
                            variant='outlined'
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
                />)}

            <Button
                onPress={handleSubmit(onSubmit)}
                title='Excluir'
                type='primary'
                variant='filled'
                borderRadius='medium'
            />
        </SafeAreaView>
    );
}