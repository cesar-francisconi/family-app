import {
    CategoryParam,
    Comment,
    CommentAnswer,
    Movie,
    MovieGenreType,
} from '@/movie';
import { create } from 'zustand'
import uuid from 'react-native-uuid';
import {
    collection,
    query,
    getDocs,
    getFirestore,
    doc,
    getDoc,
    updateDoc,
    onSnapshot,
} from '@react-native-firebase/firestore';
import { getAuth } from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

type CurrentMovieId = Movie['id'] | null;
type CurrentCommentId = Comment['id'] | null;
type CurrentAnswerId = CommentAnswer['id'] | null;
type CurrentUserId = Comment['userId'] | null;

interface InitialState {
    currentMovieId: CurrentMovieId;
    currentCommentId: CurrentCommentId;
    currentAnswerId: CurrentAnswerId;
    currentUserId: CurrentUserId;
    filteredData: Movie[] | null;
};

const initialState: InitialState = {
    currentMovieId: '',
    currentCommentId: '',
    currentAnswerId: '',
    currentUserId: '',
    filteredData: [],
};

export const useMovies = create(() => initialState);

export const getAllMovies = async () => {
    const db = getFirestore();

    const q = query(collection(db, 'movies'));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return null;

    return querySnapshot.docs.map((movie) => {
        return {
            id: movie.id,
            ...movie.data()
        } as Movie;
    });
};

export const sortByPopularity = async (): Promise<Movie[] | null> => {
    const movies = await getAllMovies();

    if (!movies) return null;

    return [...movies].sort((a, b) => b.like - a.like);
};

export const getMoviesForMovieCardCarouselGroup = async (categories: CategoryParam[]) => {
    const movies = await getAllMovies();

    if (!movies) return null;

    const uniqueCategories = new Set(categories);

    if (uniqueCategories.size !== categories.length) {
        throw new Error('Categorias duplicadas não são permitidas.');
    }

    const results = await Promise.all(
        [...uniqueCategories].map(async (category, index) => {
            if (category === 'Todos') {
                return {
                    id: `0${index + 1}`,
                    category,
                    movies,
                };
            }

            const moviesByGenre = await getMoviesByGenre(category.toLowerCase());

            if (!moviesByGenre) return null;

            return {
                id: `0${index + 1}`,
                category,
                movies: moviesByGenre,
            };
        })
    );

    const hasNull = results.some((group) => group === null);

    return hasNull ? null : results as { id: string; category: string; movies: Movie[] }[];
};

export const getMoviesByCategory = async (
    category: CategoryParam,
    genre: MovieGenreType,
    actorId: string,
) => {
    const movies = await getAllMovies();

    if (!movies) return null;

    if (category === 'Todos') {
        return movies;
    }

    if (category === 'Filmes com' && actorId) {
        return await getActorMoviesById(actorId);
    }

    if (genre) {
        return await getMoviesByGenre(genre);
    }

    return [];
};

export const getMostRecentMovies = async (limit = 4): Promise<Movie[] | null> => {
    const movies = await getAllMovies();

    if (!movies) return null;

    return movies
        .slice()
        .sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime())
        .slice(0, limit);
};

export const getCommentsById = (
    movieId: Movie['id'],
    onCommentsUpdate: (comments: Comment[] | null) => void
) => {
    const db = getFirestore();
    const movieRef = doc(db, 'movies', movieId);

    const unsubscribe = onSnapshot(movieRef, (docSnap) => {
        if (!docSnap.exists()) {
            onCommentsUpdate(null);
            return;
        }

        const data = docSnap.data() as Movie;
        onCommentsUpdate(data.comments ?? null);
    });

    return unsubscribe;
};

export const getCommentById = (
    commentId: Comment['id'],
    onCommentsUpdate: (comment: Comment | null) => void,
) => {
    const currentMovieId = getCurrentMovieId() as string;
    const db = getFirestore();
    const movieRef = doc(db, 'movies', currentMovieId);

    const unsubscribe = onSnapshot(movieRef, (docSnap) => {
        if (!docSnap.exists()) {
            onCommentsUpdate(null);
            return;
        }

        const data = docSnap.data() as Movie;

        const comment = data.comments.filter((comment) => commentId === comment.id)[0];

        onCommentsUpdate(comment ?? null);
    });

    return unsubscribe;
};

export const getActorMoviesById = async (actorId: string) => {
    const movies = await getAllMovies();

    if (!movies) return null;

    const actorMovies = movies.filter((movie) => movie.cast.some((actor) => actorId === actor.id));

    return actorMovies;
};

export const getActorById = async (actorId: string) => {
    const movies = await getAllMovies();

    if (!movies) return null;

    for (const movie of movies) {
        const actor = movie.cast.find((actor) => actor.id === actorId);

        if (actor) {
            return actor;
        }
    };

    return null;
};

export const filterMoviesBySearchTerm = async (searchTerm: string): Promise<Movie[] | null> => {
    const term = searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .trim().toLowerCase();

    const movies = await getAllMovies();

    if (!movies) return null;

    const data = movies.filter(movie => {
        // título
        const titleMatch = movie.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .toLowerCase().includes(term);

        // gêneros
        const genreMatch = movie.genre.some(g => g.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .toLowerCase().includes(term));

        // nomes dos atores
        const castMatch = movie.cast.some(actor =>
            actor.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .toLowerCase().includes(term)
        );

        // retorna true se houver pelo menos uma correspondência
        return titleMatch || genreMatch || castMatch;
    });

    return data;
};

interface FilterMoviesState {
    actor: string;
    genre: string;
    year: string;
    order: 'Popularidade' | 'Mais recentes';
};

export const filterMovies = async ({ actor, genre, year, order }: FilterMoviesState) => {
    const movies = await getAllMovies();

    if (!movies) return;

    let filtered = movies;

    if (actor !== 'Tudo') {
        filtered = filtered.filter((movie) =>
            movie.cast.some((act) => act.name === actor)
        );
    }

    if (genre !== 'Tudo') {
        filtered = filtered.filter((movie) =>
            movie.genre.includes(genre)
        );
    }

    if (year !== 'Tudo') {
        filtered = filtered.filter((movie) =>
            movie.date.startsWith(year)
        );
    }

    if (order === 'Popularidade') {
        filtered = filtered.sort((a, b) => b.like - a.like);
    } else if (order === 'Mais recentes') {
        filtered = filtered.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    }

    useMovies.setState({ filteredData: filtered });
};


export const getMoviesByGenre = async (genre: MovieGenreType): Promise<Movie[] | null> => {
    const movies = await getAllMovies();

    if (!movies) return null;

    const filteredMovies = movies.filter((movie) => genre === movie.genre[0]);

    return filteredMovies;
}

export const getMovieById = async (id: string) => {
    const db = getFirestore();

    const qm = doc(db, 'movies', id);

    const querySnapshot = await getDoc(qm);

    if (!querySnapshot.exists()) return null;

    const movie: Movie = {
        id: querySnapshot.id,
        ...querySnapshot.data(),
    } as Movie;

    return movie;
}

export const getAnswerUsernamesByIds = async () => {
    const movies = await getAllMovies();
    const selectedMovieId = getCurrentMovieId();
    const selectedCommentId = getCurrentCommentId();

    if (!movies) return null;

    const movie = movies.find((movie) => movie.id === selectedMovieId);
    if (!movie) return [];

    const comment = movie.comments.find(c => c.id === selectedCommentId);
    if (!comment) return [];

    const rawUsernames = comment.answers.map(answer =>
        answer.username.startsWith('@') ? answer.username.replace('@', '') : answer.username
    ).filter(answer => !answer.includes(comment.username));

    const uniqueUsernames = [...new Set(rawUsernames)];

    return uniqueUsernames;
};

export const toggleCommentLikeForUser = async (
    commentId: string
) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!(user && user.uid)) return;

    const uid = user.uid;
    const currentMovieId = getCurrentMovieId();

    const db = getFirestore();
    const movieRef = doc(db, 'movies', currentMovieId as string);
    const movieSnap = await getDoc(movieRef);

    const data = movieSnap.data();

    if (!data) {
        console.error(`Filme com ID ${currentMovieId} não encontrado.`);
        return;
    };

    const movie = {
        id: movieSnap.id,
        ...data,
    } as Movie;

    const updatedComments = movie.comments.map((comment) => {
        if (comment.id !== commentId) return comment;

        const hasLiked = comment.likes.includes(uid);
        const hasDesliked = comment.dislikes.includes(uid);

        return {
            ...comment,
            likes: hasLiked
                ? comment.likes.filter((id) => id !== uid)
                : [...comment.likes, uid],
            dislikes: hasDesliked
                ? comment.dislikes.filter((id) => id !== uid)
                : comment.dislikes,
        };
    });

    await updateDoc(movieRef, {
        comments: updatedComments,
    });
};

export const toggleAnswerLikeForUser = async (
    answerId: string,
) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!(user && user.uid)) return;

    const uid = user.uid;
    const currentMovieId = getCurrentMovieId();
    const currentCommentId = getCurrentCommentId();

    const db = getFirestore();
    const movieRef = doc(db, 'movies', currentMovieId as string);
    const movieSnap = await getDoc(movieRef);

    const data = movieSnap.data();

    if (!data) {
        console.error(`Filme com ID ${currentMovieId} não encontrado.`);
        return;
    };

    const movie = {
        id: movieSnap.id,
        ...data,
    } as Movie;

    const updatedComments = movie.comments.map((comment) => {
        if (comment.id !== currentCommentId) return comment;

        return {
            ...comment,
            answers: comment.answers.map((answer) => {
                if (answer.id !== answerId) return answer;

                const hasLiked = answer.likes.includes(uid);
                const hasDesliked = answer.dislikes.includes(uid);

                return {
                    ...answer,
                    likes: hasLiked
                        ? answer.likes.filter((id) => id !== uid)
                        : [...answer.likes, uid],
                    dislikes: hasDesliked
                        ? answer.dislikes.filter((id) => id !== uid)
                        : answer.dislikes,
                };
            }),
        };
    });

    await updateDoc(movieRef, {
        comments: updatedComments,
    });
};

export const toggleCommentDislikeForUser = async (
    commentId: string,
) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!(user && user.uid)) return;

    const uid = user.uid;
    const currentMovieId = getCurrentMovieId();

    const db = getFirestore();
    const movieRef = doc(db, 'movies', currentMovieId as string);
    const movieSnap = await getDoc(movieRef);

    const data = movieSnap.data();

    if (!data) {
        console.error(`Filme com ID ${currentMovieId} não encontrado.`);
        return;
    };

    const movie = {
        id: movieSnap.id,
        ...data,
    } as Movie;

    const updatedComments = movie.comments.map((comment) => {
        if (comment.id !== commentId) return comment; // 

        const hasDesliked = comment.dislikes.includes(uid);
        const hasLiked = comment.likes.includes(uid);

        return {
            ...comment,
            dislikes: hasDesliked
                ? comment.dislikes.filter((id) => id !== uid)
                : [...comment.dislikes, uid],
            likes: hasLiked
                ? comment.likes.filter((id) => id !== uid)
                : comment.likes,
        };
    });

    await updateDoc(movieRef, {
        comments: updatedComments,
    });
};

export const toggleAnswerDislikeForUser = async (
    answerId: string,
) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!(user && user.uid)) return;

    const uid = user.uid;
    const currentMovieId = getCurrentMovieId();
    const currentCommentId = getCurrentCommentId();

    const db = getFirestore();
    const movieRef = doc(db, 'movies', currentMovieId as string);
    const movieSnap = await getDoc(movieRef);

    const data = movieSnap.data();

    if (!data) {
        console.error(`Filme com ID ${currentMovieId} não encontrado.`);
        return;
    };

    const movie = {
        id: movieSnap.id,
        ...data,
    } as Movie;

    const updatedComments = movie.comments.map((comment) => {
        if (comment.id !== currentCommentId) return comment;

        return {
            ...comment,
            answers: comment.answers.map((answer) => {
                if (answer.id !== answerId) return answer;

                const hasDesliked = answer.dislikes.includes(uid);
                const hasLiked = answer.likes.includes(uid);

                return {
                    ...answer,
                    dislikes: hasDesliked
                        ? answer.dislikes.filter((id) => id !== uid)
                        : [...answer.dislikes, uid],
                    likes: hasLiked
                        ? answer.likes.filter((id) => id !== uid)
                        : answer.likes,
                };
            }),
        };
    });

    await updateDoc(movieRef, {
        comments: updatedComments,
    });
};

export const hasLoggedInUserLikedComment = (likes: string[]): boolean => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!(user && user.uid)) return false;

    const uid = user.uid;

    return likes.includes(uid);
};

export const hasLoggedInUserLikedAnswer = (likes: string[]): boolean => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!(user && user.uid)) return false;

    const uid = user.uid;

    return likes.includes(uid);
};

export const hasLoggedInUserDislikedComment = (dislikes: string[]) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!(user && user.uid)) return false;

    const uid = user.uid;

    return dislikes.includes(uid);
};

export const hasLoggedInUserDislikedAnswer = (dislikes: string[]) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!(user && user.uid)) return false;

    const uid = user.uid;

    return dislikes.includes(uid);
};

export const changeCommentById = async (
    newComment: string,
) => {
    const currentMovieId = getCurrentMovieId();
    const currentCommentId = getCurrentCommentId();

    const db = getFirestore();
    const movieRef = doc(db, 'movies', currentMovieId as string);
    const movieSnap = await getDoc(movieRef);

    const data = movieSnap.data();

    if (!data) {
        console.error(`Filme com ID ${currentMovieId} não encontrado.`);
        return;
    };

    const comments = (data.comments || []) as Comment[];

    const updatedComments = comments.map((comment) => {
        if (comment.id !== currentCommentId) return comment;

        return {
            ...comment,
            isEdit: true,
            comment: newComment,
        };
    });

    await updateDoc(movieRef, {
        comments: updatedComments,
    });
};

export const changeAnswerById = async (
    newAnswer: string,
) => {
    const currentMovieId = getCurrentMovieId();
    const currentCommentId = getCurrentCommentId();
    const currentAnswerId = getCurrentAnswerId();

    const db = getFirestore();
    const movieRef = doc(db, 'movies', currentMovieId as string);
    const movieSnap = await getDoc(movieRef);

    const data = movieSnap.data();

    if (!data) {
        console.error(`Filme com ID ${currentMovieId} não encontrado.`);
        return;
    };

    const comments = (data.comments || []) as Comment[];

    const updatedComments = comments.map((comment) => {
        if (comment.id !== currentCommentId) return comment;

        return {
            ...comment,
            answers: comment.answers.map((answer) => {
                if (answer.id !== currentAnswerId) return answer;

                return {
                    ...answer,
                    isEdit: true,
                    answer: newAnswer,
                };
            }),
        };
    });

    await updateDoc(movieRef, {
        comments: updatedComments,
    });
};

export const setComment = async (
    movieId: string,
    user: Pick<Comment, 'username' | 'userId' | 'avatar' | 'comment' | 'background'>,
) => {
    const comment = {
        id: uuid.v4(),
        username: user.username,
        userId: user.userId,
        time: Date.now(),
        avatar: user.avatar,
        background: user.background,
        comment: user.comment,
        likes: [],
        dislikes: [],
        answers: [],
        isEdit: false,
    };

    const db = getFirestore();
    const movieRef = doc(db, 'movies', movieId as string);
    const movieSnap = await getDoc(movieRef);

    const data = movieSnap.data();

    if (!data) {
        console.error(`Filme com ID ${movieId} não encontrado.`);
        return;
    }

    const existingComments = (data.comments || []) as Comment[];

    const updatedComments = [comment, ...existingComments];

    await updateDoc(movieRef, {
        comments: updatedComments,
    });

    Toast.show({
        type: 'customSuccessBase',
        text2: 'Comentário adicionado.',
        position: 'top',
        visibilityTime: 3000,
    });
};

export const setAnswer = async (
    movieId: string,
    user: Pick<CommentAnswer, 'username' | 'userId' | 'avatar' | 'answer' | 'background'>,
) => {
    const answer = {
        id: uuid.v4(),
        username: user.username,
        userId: user.userId,
        time: Date.now(),
        background: user.background,
        avatar: user.avatar,
        answer: user.answer,
        likes: [],
        dislikes: [],
        isEdit: false,
    };

    const currentCommentId = getCurrentCommentId();
    const db = getFirestore();
    const movieRef = doc(db, 'movies', movieId as string);
    const movieSnap = await getDoc(movieRef);

    const data = movieSnap.data();

    if (!data) {
        console.error(`Filme com ID ${movieId} não encontrado.`);
        return;
    };

    const comments = (data.comments || []) as Comment[];

    const updatedComments = comments.map((comment) => {
        if (comment.id !== currentCommentId) return comment;

        return {
            ...comment,
            answers: [
                ...(comment.answers || []),
                answer,
            ],
        };
    });

    await updateDoc(movieRef, {
        comments: updatedComments,
    });

    Toast.show({
        type: 'customSuccessBase',
        text2: 'Resposta adicionada.',
        position: 'top',
        visibilityTime: 3000,
    });
};

export const removeCommentById = async () => {
    const currentMovieId = getCurrentMovieId();
    const currentCommentId = getCurrentCommentId();

    const db = getFirestore();
    const movieRef = doc(db, 'movies', currentMovieId as string);
    const movieSnap = await getDoc(movieRef);

    const data = movieSnap.data();

    if (!data) {
        console.error(`Filme com ID ${currentMovieId} não encontrado.`);
        return;
    };

    const comments = (data.comments || []) as Comment[];

    const updatedComments = comments.filter((comment) => comment.id !== currentCommentId);

    await updateDoc(movieRef, {
        comments: updatedComments,
    });
};

export const removeAnswerById = async () => {
    const currentMovieId = getCurrentMovieId();
    const currentCommentId = getCurrentCommentId();
    const currentAnswerId = getCurrentAnswerId();

    const db = getFirestore();
    const movieRef = doc(db, 'movies', currentMovieId as string);
    const movieSnap = await getDoc(movieRef);

    const data = movieSnap.data();

    if (!data) {
        console.error(`Filme com ID ${currentMovieId} não encontrado.`);
        return;
    };

    const comments = (data.comments || []) as Comment[];

    const updatedComments = comments.map((comment) => {
        if (comment.id !== currentCommentId) return comment;

        return {
            ...comment,
            answers: comment.answers.filter((answer) => answer.id !== currentAnswerId),
        };
    });

    await updateDoc(movieRef, {
        comments: updatedComments,
    });
};

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

