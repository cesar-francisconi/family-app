import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { MovieTitleProps } from './types';
import { Icon } from '../Icon';
import { Colors } from '@/src/constants/Colors';
import { formatDuration } from '@/src/helpers/formatDuration';
import { formatDate } from '@/src/helpers/formatDate';

export function MovieTitle(props: MovieTitleProps) {

    const {
        title,
        time = 125,
        date = '2025-11-05',
        withDetails,
    } = props;

    return (
        <View style={styles.container}>
            <Text
                style={styles.title}
            >
                {title}
            </Text>

            {withDetails && <View
                style={styles.timeAndDateContainer}
            >
                <View
                    style={styles.timeContainer}
                >
                    <Icon
                        name='Fontisto'
                        icon='clock'
                        color={Colors.surface.onVariant}
                        size='small'
                    />
                    <Text
                        style={styles.time}
                    >
                        {formatDuration(time)}
                    </Text>
                </View>

                <View
                    style={styles.dateContainer}
                >
                    <Icon
                        name='MaterialIcons'
                        icon='date-range'
                        color={Colors.surface.onVariant}
                        size='small'
                    />
                    <Text
                        style={styles.date}
                    >
                        {formatDate(date)}
                    </Text>
                </View>
            </View>}
        </View>
    );
}

