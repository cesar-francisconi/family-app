import { Icon } from '@/src/components/Icon';
import { Option } from '@/src/components/Option';
import { OptionsList } from '@/src/components/OptionsList';
import { styles } from '@/src/screen/Account/styles';
import { AccountProps } from '@/src/screen/Account/types';
import { useRouter } from 'expo-router';
import {
    SafeAreaView,
} from 'react-native';

export default function Account(props: AccountProps) {

    const { } = props;

    const route = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <OptionsList
                isBackground
                withStroke
                options={[
                    <Option
                        withStroke
                        onPress={() => route.push('/usernameChange')}
                        text='Alterar usuário'
                        rightIcon={
                            <Icon
                                name='Entypo'
                                icon='chevron-thin-right'
                            />
                        }
                    />,
                    <Option
                        withStroke
                        onPress={() => route.push('/emailChange')}
                        text='Alterar e-mail da conta'
                        rightIcon={
                            <Icon
                                name='Entypo'
                                icon='chevron-thin-right'
                            />
                        }
                    />,
                    <Option
                        withStroke
                        onPress={() => route.push('/passwordChange')}
                        text='Alterar senha'
                        rightIcon={
                            <Icon
                                name='Entypo'
                                icon='chevron-thin-right'
                            />
                        }
                    />,
                    <Option
                        onPress={() => route.push('/deleteUser')}
                        text='Excluir conta'
                        rightIcon={
                            <Icon
                                name='Entypo'
                                icon='chevron-thin-right'
                            />
                        }
                    />,
                ]
                }
            />
        </SafeAreaView>
    );
}