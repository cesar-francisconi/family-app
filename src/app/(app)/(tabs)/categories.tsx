import { ActivityIndicator } from '@/src/components/ActivityIndicator';
import { ChipsCarouselGroup } from '@/src/components/ChipsCarouselGroup';
import { MovieCardList } from '@/src/components/MovieCardList';
import { useMovies } from '@/src/hook/useMovie';
import { styles } from '@/src/screen/Categories/styles';
import { CategoriesProps } from '@/src/screen/Categories/types';
import {
    SafeAreaView,
} from 'react-native';

export default function Categories(props: CategoriesProps) {

    const {

    } = props;

    const filteredData = useMovies((state) => state.filteredData);

    return (
        <SafeAreaView style={styles.container}>
            <ChipsCarouselGroup />

            {filteredData ? (<MovieCardList
                data={filteredData}
                movieCardFlexWithTitle
            />)
                :
                (
                    <ActivityIndicator />
                )}
        </SafeAreaView>
    );
}