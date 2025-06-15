
import { Icon } from '@/src/components/Icon';
import { LabelAvatar } from '@/src/components/LabelAvatar';
import { Option } from '@/src/components/Option';
import { OptionsList } from '@/src/components/OptionsList';
import { useUser } from '@/src/hook/useUser';
import { styles } from '@/src/screen/Me/styles';
import { MeProps } from '@/src/screen/Me/types';
import { useRouter } from 'expo-router';
import {
    SafeAreaView,
} from 'react-native';

export default function Me(props: MeProps) {

    const {

    } = props;

    const route = useRouter();

    const {
        avatar,
        username,
    } = useUser();

    return (
        <SafeAreaView style={styles.container}>
            <LabelAvatar
                avatarMode='image'
                avatarImageUrl={avatar}
                label={username}
            />

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
                        onPress={() => { }}
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