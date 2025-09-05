import { useRouter } from "expo-router";
import { MovieCardProps } from "../components/MovieCard/types";
import { setCurrentMovieId } from "./useMovie";
import { useDebounce } from "../helpers/debounce";
import { TitleParam } from "@/movie";

export function useMovieCardCarouselNavigation(title: TitleParam, mainGenre: string) {
    const router = useRouter();
    const { debounce } = useDebounce();

    const navigateToDetails = (movieId: string) => {
        setCurrentMovieId(movieId);

        router.push(`/(app)/(details)?movieId=${movieId}`);
    };

    const navigateToExplorer = () => {
        router.push(`/(app)/explorer?title=${title}&genre=${mainGenre}`);
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

