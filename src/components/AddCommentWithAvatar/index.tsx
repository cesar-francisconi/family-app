import {
    View,
} from 'react-native';
import {
    AddCommentWithAvatarGlobalSearchParams,
    AddCommentWithAvatarProps,
} from './types';
import { styles } from './styles';
import { AddComment } from '../AddComment';
import { Avatar } from '../Avatar';
import { AvatarProps } from '../Avatar/types';
import { useDebounce } from '@/src/helpers/debounce';
import {
    useGlobalSearchParams,
    useRouter,
} from 'expo-router';

export function AddCommentWithAvatar(props: AddCommentWithAvatarProps) {

    const {
        avatarOptions,
        addCommentOptions,
    } = props;

    const { movieId } = useGlobalSearchParams<AddCommentWithAvatarGlobalSearchParams>();

    const { debounce } = useDebounce(1000);

    const route = useRouter();

    const safeAvatarOptions: AvatarProps = {
        ...avatarOptions,
        size: avatarOptions.size ?? 'small',
        withStroke: avatarOptions.withStroke ?? false,
    };

    return (
        <View style={styles.container}>
            <Avatar {...safeAvatarOptions} />

            <AddComment
                {...addCommentOptions}
                fnAddComment={() => debounce(() => route.push(`/(app)/(details)/(comments)/comment?movieId=${movieId}&origin=isAddComment`))}
            />
        </View>
    );
}

