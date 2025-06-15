import { Comment, CommentAnswer, Movie, MovieGenreType, MOVIES } from '@/movie';
import { create } from 'zustand'
import uuid from 'react-native-uuid';

type CurrentMovieId = Movie['id'] | null;
type CurrentCommentId = Comment['id'] | null;
type CurrentAnswerId = CommentAnswer['id'] | null;
type CurrentUserId = Comment['userId'] | null;

interface InitialState {
    movies: Movie[];
    currentMovieId: CurrentMovieId;
    currentCommentId: CurrentCommentId;
    currentAnswerId: CurrentAnswerId;
    currentUserId: CurrentUserId;
};

const initialState: InitialState = {
    movies: MOVIES,
    currentMovieId: '',
    currentCommentId: '',
    currentAnswerId: '',
    currentUserId: '',
};

export const useMovies = create(() => initialState);

export const getAllMovies = () => [...useMovies.getState().movies];

export const getMoviesByGenre = (genre: MovieGenreType) => {
    const movies = getAllMovies();

    const filteredMovies = movies.filter((movie) => genre === movie.genre[0]);

    return filteredMovies;
}

export const getMovieById = (id: string) => {
    const movies = [...useMovies.getState().movies];

    const getMovieById = movies.filter((movie) => id === movie.id)[0];

    return getMovieById;
}

export function getAnswerUsernamesByIds() {
    const movies = [...useMovies.getState().movies];
    const selectedMovieId = useMovies.getState().currentMovieId;
    const selectedCommentId = useMovies.getState().currentCommentId;

    const movie = movies.find(m => m.id === selectedMovieId);
    if (!movie) return [];

    const comment = movie.comments.find(c => c.id === selectedCommentId);
    if (!comment) return [];

    const rawUsernames = comment.answers.map(answer =>
        answer.username.startsWith('@') ? answer.username.replace('@', '') : answer.username
    ).filter(answer => !answer.includes(comment.username));

    // Remove duplicados com Set
    const uniqueUsernames = [...new Set(rawUsernames)];

    return uniqueUsernames;
};

export const toggleCommentLikeForUser = (loggedInUserId: string, commentId: string) =>
    useMovies.setState(({ movies, currentMovieId }) => ({
        movies: movies.map((movie) => {
            if (movie.id !== currentMovieId) return movie;

            return {
                ...movie,
                comments: movie.comments.map((comment) => {
                    if (comment.id !== commentId) return comment;

                    const hasLiked = comment.likes.includes(loggedInUserId);
                    const hasDesliked = comment.deslikes.includes(loggedInUserId);

                    return {
                        ...comment,
                        likes: hasLiked
                            ? comment.likes.filter((id) => id !== loggedInUserId)
                            : [...comment.likes, loggedInUserId],
                        deslikes: hasDesliked
                            ? comment.deslikes.filter((id) => id !== loggedInUserId)
                            : comment.deslikes,
                    };
                }),
            };
        }),
    }));

export const toggleAnswerLikeForUser = (loggedInUserId: string, answerId: string) =>
    useMovies.setState(({ movies, currentMovieId, currentCommentId }) => ({
        movies: movies.map((movie) => {
            if (movie.id !== currentMovieId) return movie;

            return {
                ...movie,
                comments: movie.comments.map((comment) => {
                    if (comment.id !== currentCommentId) return comment;

                    return {
                        ...comment,
                        answers: comment.answers.map((answer) => {
                            if (answer.id !== answerId) return answer;

                            const hasLiked = answer.likes.includes(loggedInUserId);
                            const hasDesliked = answer.deslikes.includes(loggedInUserId);

                            return {
                                ...answer,
                                likes: hasLiked
                                    ? answer.likes.filter((id) => id !== loggedInUserId)
                                    : [...answer.likes, loggedInUserId],
                                deslikes: hasDesliked
                                    ? answer.deslikes.filter((id) => id !== loggedInUserId)
                                    : answer.deslikes,
                            };
                        }),
                    };
                }),
            };
        }),
    }));

export const toggleCommentDislikeForUser = (loggedInUserId: string, commentId: string) =>
    useMovies.setState(({ movies, currentMovieId }) => ({
        movies: movies.map((movie) => {
            if (movie.id !== currentMovieId) return movie;

            return {
                ...movie,
                comments: movie.comments.map((comment) => {
                    if (comment.id !== commentId) return comment;

                    const hasDisliked = comment.deslikes.includes(loggedInUserId);
                    const hasLiked = comment.likes.includes(loggedInUserId);

                    return {
                        ...comment,
                        deslikes: hasDisliked
                            ? comment.deslikes.filter((id) => id !== loggedInUserId)
                            : [...comment.deslikes, loggedInUserId],
                        likes: hasLiked
                            ? comment.likes.filter((id) => id !== loggedInUserId)
                            : comment.likes,
                    };
                }),
            };
        }),
    }));

export const toggleAnswerDislikeForUser = (loggedInUserId: string, answerId: string) =>
    useMovies.setState(({ movies, currentMovieId, currentCommentId }) => ({
        movies: movies.map((movie) => {
            if (movie.id !== currentMovieId) return movie;

            return {
                ...movie,
                comments: movie.comments.map((comment) => {
                    if (comment.id !== currentCommentId) return comment;

                    return {
                        ...comment,
                        answers: comment.answers.map((answer) => {
                            if (answer.id !== answerId) return answer;

                            const hasDisliked = answer.deslikes.includes(loggedInUserId);
                            const hasLiked = answer.likes.includes(loggedInUserId);

                            return {
                                ...answer,
                                deslikes: hasDisliked
                                    ? answer.deslikes.filter((id) => id !== loggedInUserId)
                                    : [...answer.deslikes, loggedInUserId],
                                likes: hasLiked
                                    ? answer.likes.filter((id) => id !== loggedInUserId)
                                    : answer.likes,
                            };
                        }),
                    };
                }),
            };
        }),
    }));

export const hasLoggedInUserLikedComment = (loggedInUserId: string, commentId: string): boolean => {
    const movie = getAllMovies().find((m) => m.id === getCurrentMovieId());
    if (!movie) return false;

    const comment = movie.comments.find((c) => c.id === commentId);
    if (!comment) return false;

    return comment.likes.includes(loggedInUserId);
};

export const hasLoggedInUserLikedAnswer = (userId: string, answerId: string): boolean => {
    const { movies, currentMovieId, currentCommentId } = useMovies.getState();

    const movie = movies.find((m) => m.id === currentMovieId);
    if (!movie) return false;

    const comment = movie.comments.find((c) => c.id === currentCommentId);
    if (!comment) return false;

    const answer = comment.answers.find((a) => a.id === answerId);
    if (!answer) return false;

    return answer.likes.includes(userId);
};

export const hasLoggedInUserDislikedComment = (userId: string, commentId: string) => {
    const { movies, currentMovieId } = useMovies.getState();

    const movie = movies.find((m) => m.id === currentMovieId);
    if (!movie) return false;

    const comment = movie.comments.find((c) => c.id === commentId);
    if (!comment) return false;

    return comment.deslikes.includes(userId);
};

export const hasLoggedInUserDislikedAnswer = (userId: string, answerId: string) => {
    const { movies, currentMovieId, currentCommentId } = useMovies.getState();

    const movie = movies.find((m) => m.id === currentMovieId);
    if (!movie) return false;

    const comment = movie.comments.find((c) => c.id === currentCommentId);
    if (!comment) return false;

    const answer = comment.answers.find((a) => a.id === answerId);
    if (!answer) return false;

    return answer.deslikes.includes(userId);
};

export const changeCommentById = (newComment: string) => useMovies.setState((state) => {

    const currentMovieId = state.currentMovieId;
    const currentCommentId = state.currentCommentId;

    const newMovies = state.movies.map((movie) => {
        if (currentMovieId === movie.id) {
            return {
                ...movie, comments: movie.comments.map((comment) => {
                    if (currentCommentId === comment.id) {
                        return {
                            ...comment, isEdit: true, comment: newComment,
                        };
                    };

                    return comment;
                }),
            };
        };

        return movie;
    });

    return {
        movies: newMovies,
    };
});

export const changeAnswerById = (newAnswer: string) => useMovies.setState((state) => {

    const currentMovieId = state.currentMovieId;
    const currentCommentId = state.currentCommentId;
    const currentAnswerId = state.currentAnswerId;

    const newMovies = state.movies.map((movie) => {
        if (currentMovieId === movie.id) {
            return {
                ...movie, comments: movie.comments.map((comment) => {
                    if (currentCommentId === comment.id) {
                        const answers = comment.answers.map((answer) => {
                            if (currentAnswerId === answer.id) {
                                return {
                                    ...answer, isEdit: true, answer: newAnswer,
                                };
                            };

                            return answer;
                        });

                        return {
                            ...comment, answers: answers,
                        }
                    };

                    return comment;
                }),
            };
        };

        return movie;
    });

    return {
        movies: newMovies,
    };
});

export const setComment = (movieId: string, user: { username: string; message: string; avatar: string; userId: string }) => useMovies.setState((state) => {
    const comment = {
        id: uuid.v4(),
        username: user.username,
        userId: user.userId,
        time: Date.now(),
        avatar: user.avatar,
        comment: user.message,
        likes: [],
        deslikes: [],
        answers: [],
        isEdit: false,
    };


    const newMovies = [...state.movies.map((movie) => {
        if (movieId === movie.id) {
            return {
                ...movie, comments: [
                    comment,
                    ...movie.comments,
                ],
            };
        };

        return movie;
    })];

    return {
        movies: newMovies,
    };
});

export const setAnswer = (movieId: string, user: { username: string; answer: string; avatar: string; userId: string }) => useMovies.setState((state) => {
    const answer = {
        id: uuid.v4(),
        username: user.username,
        userId: user.userId,
        time: Date.now(),
        avatar: user.avatar,
        answer: user.answer,
        likes: [],
        deslikes: [],
        isEdit: false,
    };

    const newMovies = [...state.movies.map((movie) => {
        if (movieId === movie.id) {
            const comments = movie.comments.map((comment) => {
                if (state.currentCommentId === comment.id) {
                    return {
                        ...comment, answers: [
                            ...comment.answers,
                            answer,
                        ]
                    }
                }

                return comment;
            });

            return {
                ...movie, comments: comments,
            };
        };

        return movie;
    })];

    return {
        movies: newMovies,
    };
});

export const removeCommentById = () => useMovies.setState((state) => {
    const selectedMovieId = state.currentMovieId;
    const selectedCommentId = state.currentCommentId;

    const newMovies = state.movies.map((movie) => {
        if (selectedMovieId === movie.id) {
            return {
                ...movie, comments: movie.comments.filter((comment) => selectedCommentId !== comment.id),
            };
        };

        return movie;
    });

    return {
        movies: newMovies,
    };
});

export const removeAnswerById = () => useMovies.setState((state) => {
    const selectedMovieId = state.currentMovieId;
    const selectedCommentId = state.currentCommentId;
    const selectedAnswerId = state.currentAnswerId;

    const newMovies = state.movies.map((movie) => {
        if (selectedMovieId === movie.id) {
            return {
                ...movie, comments: movie.comments.map((comment) => {
                    if (selectedCommentId === comment.id) {
                        const answers = comment.answers.filter((answer) => selectedAnswerId !== answer.id);

                        return {
                            ...comment, answers: answers,
                        }
                    };

                    return comment;
                }),
            };
        };

        return movie;
    });

    return {
        movies: newMovies,
    };
});

export const setCurrentMovieId = (id: CurrentMovieId) => useMovies.setState(() => {
    return {
        currentMovieId: id,
    };
});

export const setCurrentCommentId = (id: CurrentCommentId) => useMovies.setState((state) => {
    return {
        currentCommentId: id,
    };
});

export const setCurrentAnswerId = (id: CurrentAnswerId) => useMovies.setState((state) => {
    return {
        currentAnswerId: id,
    };
});

export const setCurrentUserId = (id: CurrentMovieId) => useMovies.setState((state) => {
    return {
        currentUserId: id,
    };
});

export const getCurrentMovieId = () => useMovies.getState().currentMovieId;

export const getCurrentCommentId = () => useMovies.getState().currentCommentId;

export const getCurrentAnswerId = () => useMovies.getState().currentAnswerId;

export const getCurrentUserId = () => useMovies.getState().currentUserId;

