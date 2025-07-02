import {
    View,
} from 'react-native';
import { styles } from './styles';
import { ChipsCarouselGroupProps } from './types';
import { ChipsCarousel } from '../ChipsCarousel';
import {
    extractChips,
    Filters,
    QuartiaryOption,
} from '@/src/helpers/extractChips';
import {
    useEffect,
    useState,
} from 'react';
import { ActivityIndicator } from '../ActivityIndicator';
import { filterMovies } from '@/src/hook/useMovie';

export function ChipsCarouselGroup(props: ChipsCarouselGroupProps) {

    const [chips, setChips] = useState<Filters | null>(null);
    const [actor, setActor] = useState('Tudo');
    const [genre, setGenre] = useState('Tudo');
    const [year, setYear] = useState('Tudo');
    const [order, setOrder] = useState<QuartiaryOption>('Popularidade');

    const {
        chipOptions,
    } = props;

    useEffect(() => {
        (async () => {
            const chips = await extractChips();

            setChips(chips);
        })();
    }, []);


    useEffect(() => {
        filterMovies({ actor, genre, year, order });
    }, [actor, genre, year, order]);

    if (!chips) return <ActivityIndicator />;

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


