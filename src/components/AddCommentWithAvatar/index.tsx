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
import { useDebounce } from '@/src/helpers/debounce';
import {
    useGlobalSearchParams,
    useRouter,
} from 'expo-router';
import { resolveAddCommentWithAvatarSize } from '@/src/helpers/resolveAddCommentWithAvatarSize';

export function AddCommentWithAvatar(props: AddCommentWithAvatarProps) {

    const {
        avatarOptions,
        addCommentOptions,
    } = props;

    const { movieId } = useGlobalSearchParams<AddCommentWithAvatarGlobalSearchParams>();

    const route = useRouter();

    const { debounce } = useDebounce();

    const avatarSize = resolveAddCommentWithAvatarSize(avatarOptions);

    return (
        <View style={styles.container}>
            <Avatar {...avatarOptions} size={avatarSize} />

            <AddComment
                {...addCommentOptions}
                fnAddCommentPress={() => debounce(() => route.push(`/(app)/(details)/(comments)/comments?movieId=${movieId}&origin=isAddComment`), 1000)}
            />
        </View>
    );
}

