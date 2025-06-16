import { Comment, Movie } from "@/movie";
import {
    getCurrentMovieId,
    useMovies,
} from "@/src/hook/useMovie";

export function getCommentsById(currentMovieId: Movie['id']) {
    const movies = [...useMovies((state) => state.movies)];

    const comments = movies.filter((movie) => currentMovieId === movie.id)[0].comments;

    return comments;
};

export function getCommentById(commentId: Comment['id']) {
    const movies = [...useMovies((state) => state.movies)];

    const currentMovieId = getCurrentMovieId();

    const comments = movies.filter((movie) => currentMovieId === movie.id)[0].comments;

    const comment = comments.filter((comment) => commentId === comment.id)[0];

    return comment;
};