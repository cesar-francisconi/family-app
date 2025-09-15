import { Option } from '@/src/components/Option';
import { OptionsList } from '@/src/components/OptionsList';
import { useIcon } from '@/src/hook/useIcon';
import { usePush } from '@/src/hook/usePush';
import { getLoggedInUserIsGoogleAccount } from '@/src/hook/useUser';
import { styles } from '@/src/screen/Account/styles';
import { AccountProps } from '@/src/screen/Account/types';
import {
    SafeAreaView,
} from 'react-native';

export default function Account(props: AccountProps) {

    const { } = props;

    const pushUsernameChange = usePush({ href: '/usernameChange' });
    const pushEmailChange = usePush({ href: '/emailChange' });
    const pushPasswordChange = usePush({ href: '/passwordChange' });
    const pushDeleteUser = usePush({ href: '/deleteUser' });

    const entypoCHEVRONTHINRIGHT = useIcon({ name: 'Entypo', icon: 'chevron-thin-right' });

    const isGoogleAccount = getLoggedInUserIsGoogleAccount();

    return (
        <SafeAreaView style={styles.container}>
            {isGoogleAccount ? (<OptionsList
                isBackground
                withStroke
                options={[
                    <Option
                        withStroke
                        onPress={pushUsernameChange}
                        text='Alterar usuário'
                        rightIcon={entypoCHEVRONTHINRIGHT}
                    />,
                    <Option
                        onPress={pushDeleteUser}
                        text='Excluir conta'
                        rightIcon={entypoCHEVRONTHINRIGHT}
                    />,
                ]
                }
            />)
                :
                (<OptionsList
                    isBackground
                    withStroke
                    options={[
                        <Option
                            withStroke
                            onPress={pushUsernameChange}
                            text='Alterar usuário'
                            rightIcon={entypoCHEVRONTHINRIGHT}
                        />,
                        <Option
                            withStroke
                            onPress={pushEmailChange}
                            text='Alterar e-mail da conta'
                            rightIcon={entypoCHEVRONTHINRIGHT}
                        />,
                        <Option
                            withStroke
                            onPress={pushPasswordChange}
                            text='Alterar senha'
                            rightIcon={entypoCHEVRONTHINRIGHT}
                        />,
                        <Option
                            onPress={pushDeleteUser}
                            text='Excluir conta'
                            rightIcon={entypoCHEVRONTHINRIGHT}
                        />,
                    ]
                    }
                />)}
        </SafeAreaView>
    );
}