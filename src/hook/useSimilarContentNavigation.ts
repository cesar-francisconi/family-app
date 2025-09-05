import { useRouter } from "expo-router";
import { MovieCardProps } from "../components/MovieCard/types";
import { setCurrentMovieId } from "../hook/useMovie";
import { useDebounce } from "../helpers/debounce";

export function useSimilarContentNavigation(mainGenre: string) {
    const router = useRouter();
    const { debounce } = useDebounce();

    const navigateToDetails = (movieId: string) => {
        router.push(`/(app)/(details)?movieId=${movieId}`);
    };

    const navigateToExplorer = () => {
        router.push(`/(app)/similarContentExplorer?genre=${mainGenre}`);
    };

    const handleMovieCardPress = (lastMaxVisibleMovies: boolean, movieId: MovieCardProps['id']) => {
        debounce(() => {
            if (!lastMaxVisibleMovies) {
                navigateToDetails(movieId);
            } else {
                navigateToExplorer();
            };
        }, 1000);
    };

    return {
        handleMovieCardPress,
    };
};

