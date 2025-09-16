import { LabelAvatar } from '@/src/components/LabelAvatar';
import { Option } from '@/src/components/Option';
import { OptionsList } from '@/src/components/OptionsList';
import { usePush } from '@/src/hook/usePush';
import { useAvatarOptions } from '@/src/hook/useAvatarOptions';
import {
    getLoggedInUserAvatar,
    getLoggedInUserUsername,
} from '@/src/hook/useUser';
import { styles } from '@/src/screen/Me/styles';
import { MeProps } from '@/src/screen/Me/types';
import {
    SafeAreaView,
} from 'react-native';
import { useIcon } from '@/src/hook/useIcon';
import { useSignOut } from '@/src/hook/useSignOut';

export default function Me(props: MeProps) {

    const {

    } = props;

    const username = getLoggedInUserUsername();
    const avatar = getLoggedInUserAvatar();

    const pushMoviesYouLiked = usePush({ href: '/moviesYouLiked' });
    const pushMyList = usePush({ href: '/myList' });
    const pushAccount = usePush({ href: '/account' });

    const antDesignLIKE2 = useIcon({ name: 'AntDesign', icon: 'like2' });
    const antDesignPLUS = useIcon({ name: 'AntDesign', icon: 'plus' });
    const featherUSER = useIcon({ name: 'Feather', icon: 'user' });
    const materialIconsLOGOUT = useIcon({ name: 'MaterialIcons', icon: 'logout' });
    const entypoCHEVRONTHINRIGHT = useIcon({ name: 'Entypo', icon: 'chevron-thin-right' });

    const avatarOptions = useAvatarOptions({ avatar, username });

    if (!username) return;

    return (
        <SafeAreaView style={styles.container}>
            {avatar ? (<LabelAvatar
                avatarOptions={avatarOptions.withImagem}
                label={username}
            />)
                :
                (<LabelAvatar
                    avatarOptions={avatarOptions.noImage}
                    label={username}
                />)}

            <OptionsList
                options={[
                    <Option
                        onPress={pushMoviesYouLiked}
                        text='Você curtiu'
                        leftIcon={antDesignLIKE2}
                        rightIcon={entypoCHEVRONTHINRIGHT}
                    />,
                    <Option
                        onPress={pushMyList}
                        text='Minha lista'
                        leftIcon={antDesignPLUS}
                        rightIcon={entypoCHEVRONTHINRIGHT}
                    />,
                    <Option
                        onPress={pushAccount}
                        text='Conta'
                        leftIcon={featherUSER}
                        rightIcon={entypoCHEVRONTHINRIGHT}
                    />,
                    <Option
                        onPress={useSignOut()}
                        text='Sair'
                        leftIcon={materialIconsLOGOUT}
                        rightIcon={entypoCHEVRONTHINRIGHT}
                    />,
                ]
                }
            />
        </SafeAreaView >
    );
}