
import { Icon } from '@/src/components/Icon';
import { LabelAvatar } from '@/src/components/LabelAvatar';
import { Option } from '@/src/components/Option';
import { OptionsList } from '@/src/components/OptionsList';
import {
    getLoggedInUserBackground,
    getLoggedInUserAvatar,
    getLoggedInUserUsername,
} from '@/src/hook/useUser';
import { styles } from '@/src/screen/Me/styles';
import { MeProps } from '@/src/screen/Me/types';
import {
    getAuth,
    signOut,
} from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import {
    Alert,
    SafeAreaView,
} from 'react-native';

export default function Me(props: MeProps) {

    const {

    } = props;

    const route = useRouter();

    const username = getLoggedInUserUsername();
    const avatar = getLoggedInUserAvatar();
    const background = getLoggedInUserBackground();

    const handleSignOut = () => {
        const auth = getAuth();

        signOut(auth).then(() => {
            Alert.alert('', 'Usuário deslogado!');
        }).catch((error) => {

        });
    };

    if (!username) return;

    return (
        <SafeAreaView style={styles.container}>
            {avatar ? (<LabelAvatar
                avatarOptions={{
                    mode: 'image',
                    imageUrl: avatar,
                }}
                label={username}
            />)
                :
                (<LabelAvatar
                    avatarOptions={{
                        mode: 'initial',
                        initial: username,
                        background,
                    }}
                    label={username}
                />)}

            <OptionsList
                options={[
                    <Option
                        onPress={() => route.navigate('/moviesYouLiked')}
                        text='Você curtiu'
                        leftIcon={
                            <Icon
                                name='AntDesign'
                                icon='like2'
                            />
                        }
                        rightIcon={
                            <Icon
                                name='Entypo'
                                icon='chevron-thin-right'
                            />
                        }
                    />,
                    <Option
                        onPress={() => route.navigate('/myList')}
                        text='Minha lista'
                        leftIcon={
                            <Icon
                                name='AntDesign'
                                icon='plus'
                            />
                        }
                        rightIcon={
                            <Icon
                                name='Entypo'
                                icon='chevron-thin-right'
                            />
                        }
                    />,
                    <Option
                        onPress={() => route.navigate('/account')}
                        text='Conta'
                        leftIcon={
                            <Icon
                                name='Feather'
                                icon='user'
                            />
                        }
                        rightIcon={
                            <Icon
                                name='Entypo'
                                icon='chevron-thin-right'
                            />
                        }
                    />,
                    <Option
                        onPress={handleSignOut}
                        text='Sair'
                        leftIcon={
                            <Icon
                                name='MaterialIcons'
                                icon='logout'
                            />
                        }
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
        </SafeAreaView >
    );
}