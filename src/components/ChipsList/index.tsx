import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { ChipsListProps } from './types';
import { Chip } from '../Chip';
import { ActionDefaultOpacity } from '@/src/constants/Opacity';

export function ChipsList(props: ChipsListProps) {

    const {
        withTitle = false,
        title = 'Title',
        data,
        chipIsActive,
        chipBorderRadius,
        textTransform,
        fnChip
    } = props;

    return (
        <View
            style={styles.mainContainer}
        >
            {withTitle && <Text
                style={styles.title}
                numberOfLines={1}
            >
                {title}
            </Text>}

            <View style={styles.container}>
                {data.map((item) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={ActionDefaultOpacity}
                            key={item}
                            style={styles.button}
                            onPress={() => fnChip(item)}
                        >
                            <Chip
                                text={item}
                                borderRadius={chipBorderRadius}
                                isActive={chipIsActive}
                                textTransform={textTransform}
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

