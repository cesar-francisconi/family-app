import {
    View,
} from 'react-native';
import { styles } from './styles';
import { ChipsCarouselGroupProps } from './types';
import { ChipsCarousel } from '../ChipsCarousel';
import {
    extractChips,
    QuartiaryOption,
} from '@/src/helpers/extractChips';
import {
    useEffect,
    useState,
} from 'react';
import { filterMovies } from '@/src/helpers/filterMovies';

export function ChipsCarouselGroup(props: ChipsCarouselGroupProps) {

    const [actor, setActor] = useState('Tudo');
    const [genre, setGenre] = useState('Tudo');
    const [year, setYear] = useState('Tudo');
    const [order, setOrder] = useState<QuartiaryOption>('Popularidade');

    const {
        chipOptions,
    } = props;

    const chips = extractChips();

    useEffect(() => {
        filterMovies({ actor, genre, year, order });
    }, [actor, genre, year, order]);

    return (
        <View
            style={styles.mainContainer}
        >
            <View style={styles.container}>
                {chips.map((chipsCarousel, index) => {
                    return <ChipsCarousel
                        key={index}
                        chips={chipsCarousel}
                        chipsCarouselIndex={index}
                        chipOptions={chipOptions}
                        setActor={setActor}
                        setGenre={setGenre}
                        setYear={setYear}
                        setOrder={setOrder}
                    />
                })}
            </View>
        </View>
    );
}


