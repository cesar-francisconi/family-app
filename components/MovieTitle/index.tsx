import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { MovieTitleProps } from './types';
import { Icon } from '../Icon';
import { Colors } from '@/constants/Colors';
import { formatDuration } from '@/helpers/formatDuration';
import { formatDate } from '@/helpers/formatDate';

export function MovieTitle(props: MovieTitleProps) {

    const { title, time, date } = props;

    const isTime = time && formatDuration(time);
    const isDate = date && formatDate(date);

    return (
        <View style={styles.container}>
            <Text
                style={styles.title}
            >
                {title}
            </Text>

            <View
                style={styles.timeAndDateContainer}
            >
                <View
                    style={styles.timeContainer}
                >
                    <Icon
                        name='Fontisto'
                        icon='clock'
                        color={Colors.surface.onVariant}
                    />
                    <Text
                        style={styles.time}
                    >
                        {isTime}
                    </Text>
                </View>

                <View
                    style={styles.dateContainer}
                >
                    <Icon
                        name='MaterialIcons'
                        icon='date-range'
                        color={Colors.surface.onVariant}
                    />
                    <Text
                        style={styles.date}
                    >
                        {isDate}
                    </Text>
                </View>
            </View>
        </View>
    );
}

