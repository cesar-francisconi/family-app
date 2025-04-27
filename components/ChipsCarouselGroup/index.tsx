import {
    FlatList,
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { ChipsCarouselGroupProps } from './types';
import { ChipsCarousel } from '../ChipsCarousel';

export function ChipsCarouselGroup(props: ChipsCarouselGroupProps) {

    const { chips, showTitle = false, title = 'Title', chipBorderRadius } = props;

    const chipsCarouselProps = {
        chipBorderRadius: chipBorderRadius,
    };

    return (
        <View
            style={styles.mainContainer}
        >
            {showTitle && <Text
                style={styles.title}
                numberOfLines={1}
            >
                {title}
            </Text>}

            <View style={styles.container}>
                {chips.map((chipsCarousel, index) => {
                    return <ChipsCarousel
                        key={index}
                        chips={chipsCarousel}
                        {...chipsCarouselProps}
                    />
                })}
            </View>
        </View>
    );
}

