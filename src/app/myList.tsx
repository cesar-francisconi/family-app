import { MovieListItemGroup } from '@/src/components/MovieListItemGroup';
import { getMyListMovies } from '@/src/hook/useUser';
import { styles } from '@/src/screen/MyList/styles';
import { MylistProps } from '@/src/screen/MyList/types';
import {
    SafeAreaView,
} from 'react-native';

export default function MyList(props: MylistProps) {

    const { } = props;

    const movies = getMyListMovies();

    return (
        <SafeAreaView style={styles.container}>
            <MovieListItemGroup
                withTitle={false}
                data={movies}
            />
        </SafeAreaView>
    );
}