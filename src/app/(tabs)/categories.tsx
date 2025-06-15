import { ChipsCarouselGroup } from '@/src/components/ChipsCarouselGroup';
import { MovieCardList } from '@/src/components/MovieCardList';
import { useFilterMovies } from '@/src/helpers/filterMovies';
import { styles } from '@/src/screen/Categories/styles';
import { CategoriesProps } from '@/src/screen/Categories/types';
import {
    SafeAreaView,
} from 'react-native';

export default function Categories(props: CategoriesProps) {

    const {

    } = props;

    const data = useFilterMovies((state) => state.data);

    return (
        <SafeAreaView style={styles.container}>
            <ChipsCarouselGroup />

            <MovieCardList
                data={data}
                movieCardFlexWithTitle
            />
        </SafeAreaView>
    );
}