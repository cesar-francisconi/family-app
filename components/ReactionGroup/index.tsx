import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { ReactionGroupProps } from './types';
import { Icon } from '../Icon';
import { formatToK } from '@/helpers/formatTok';

export function ReactionGroup(props: ReactionGroupProps) {

    const {
        likeNumber,
        showLikeNumber = false,
    } = props;

    return (
        <View style={styles.container}>
            <View
                style={styles.likeContainer}
            >
                <TouchableOpacity
                    onPress={() => { }}
                >
                    <Icon
                        name='AntDesign'
                        icon='like2'
                        size='small'
                    />
                </TouchableOpacity>

                {showLikeNumber && <Text
                    style={styles.likeQuantity}
                >
                    {likeNumber && formatToK(likeNumber)}
                </Text>}
            </View>

            <TouchableOpacity
                onPress={() => { }}
            >
                <Icon
                    name='AntDesign'
                    icon='dislike2'
                    size='small'
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { }}
            >
                <Icon
                    name='MaterialCommunityIcons'
                    icon='comment-outline'
                    size='small'
                />
            </TouchableOpacity>
        </View>
    );
}

