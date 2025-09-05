import { useRouter } from "expo-router";
import { MovieCardProps } from "../components/MovieCard/types";
import { useDebounce } from "../helpers/debounce";
import {
    CastMember,
    TitleParam,
} from "@/movie";

export function useActorMovieCardCarouselNavigation(actorId: CastMember['id'], title: TitleParam) {
    const router = useRouter();
    const { debounce } = useDebounce();

    const navigateToDetails = (movieId: string) => {
        router.push(`/(app)/(details)?movieId=${movieId}`);
    };

    const navigateToExplorer = () => {
        router.push(`/(app)/actorExplorer?title=${title}&actorId=${actorId}`);
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

