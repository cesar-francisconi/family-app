import { create } from 'zustand'
import { getAllMovies } from './useMovie';
import {
    doc,
    getDoc,
    getFirestore,
    onSnapshot,
    updateDoc,
} from '@react-native-firebase/firestore';
import { getAuth } from '@react-native-firebase/auth';

export interface User {
    id: string;
    username: string;
    avatar: string | null;
    searchHistory: string[];
    background: string;
    myList: string[];
    myLikedMovies: string[];
};

const initialState: User = {
    id: '',
    username: '',
    avatar: '',
    searchHistory: [],
    background: '',
    myList: [],
    myLikedMovies: [],
};

export const useUser = create(() => initialState);

export const getLoggedInUserId = () => useUser.getState().id;

export const setLoggedInUser = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user && user.uid) {
        const uid = user.uid;

        const db = getFirestore();
        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);

        const data = userSnap.data() as User;

        if (!data) {
            console.error(`Usuário com ID ${uid} não encontrado.`);
            return null;
        }

        useUser.setState({
            ...data,
            id: uid,
        });
    };
};

export const getLoggedInUserBackground = () => useUser.getState().background;

export const getLoggedInUserUsername = () => useUser((state) => state.username);

export const getLoggedInUserAvatar = () => useUser.getState().avatar;

export const getLoggedInUser = () => useUser.getState();

export const addToMyList = async (movieId: string) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user && user.uid) {
        const uid = user.uid;

        const db = getFirestore();
        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);

        const data = userSnap.data();

        if (!data) {
            console.error(`Usuário com ID ${uid} não encontrado.`);
            return;
        }

        const existingMyList = (data.myList || []) as string[];

        const updatedMyList = [movieId, ...existingMyList];

        await updateDoc(userRef, {
            myList: updatedMyList,
        });
    }
};

export const removeFromMyList = async (MOVIEID: string) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user && user.uid) {
        const uid = user.uid;

        const db = getFirestore();
        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);

        const data = userSnap.data();

        if (!data) {
            console.error(`Usuário com ID ${uid} não encontrado.`);
            return;
        }

        const existingMyList = (data.myList || []) as string[];

        const updatedMyList = existingMyList.filter((movieId) => movieId !== MOVIEID);

        await updateDoc(userRef, {
            myList: updatedMyList,
        });
    };
};

export const getMyList = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!(user && user.uid)) return null;

    const uid = user.uid;

    const db = getFirestore();
    const userRef = doc(db, 'users', uid as string);
    const userSnap = await getDoc(userRef);

    const data = userSnap.data() as User;

    if (!data) {
        console.error(`User com ID ${uid} não encontrado.`);
        return null;
    }

    const myList = data.myList;

    const movies = await getAllMovies();

    if (!movies) return null;

    const myLikedMovies = myList
        .map((id) => movies.find((movie) => movie.id === id))
        .filter((movie): movie is NonNullable<typeof movie> => movie !== undefined);

    return myLikedMovies;
};

export const isMovieInMyList = async (movieId: string) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user && user.uid) {
        const uid = user.uid;

        const db = getFirestore();
        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);

        const data = userSnap.data();
        if (!data) {
            console.error(`Usuário com ID ${uid} não encontrado.`);
            return false;
        }

        const existingMyList = (data.myList || []) as string[];

        return existingMyList.includes(movieId);
    }

    return false;
};

export const addToLikedMovies = async (movieId: string) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user && user.uid) {
        const uid = user.uid;

        const db = getFirestore();
        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);

        const data = userSnap.data();

        if (!data) {
            console.error(`Usuário com ID ${uid} não encontrado.`);
            return;
        }

        const existingMyLikedMovies = (data.myLikedMovies || []) as string[];

        const updatedMyLikedMovies = [movieId, ...existingMyLikedMovies];

        await updateDoc(userRef, {
            myLikedMovies: updatedMyLikedMovies,
        });
    }
};

export const removeFromLikedMovies = async (MOVIEID: string) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user && user.uid) {
        const uid = user.uid;

        const db = getFirestore();
        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);

        const data = userSnap.data();

        if (!data) {
            console.error(`Usuário com ID ${uid} não encontrado.`);
            return;
        }

        const existingMyLikedMovies = (data.myLikedMovies || []) as string[];

        const updatedMyLikedMovies = existingMyLikedMovies.filter((movieId) => movieId !== MOVIEID);

        await updateDoc(userRef, {
            myLikedMovies: updatedMyLikedMovies,
        });
    };
};

export const getMoviesYouLiked = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!(user && user.uid)) return null;

    const uid = user.uid;

    const db = getFirestore();
    const userRef = doc(db, 'users', uid as string);
    const userSnap = await getDoc(userRef);

    const data = userSnap.data() as User;

    if (!data) {
        console.error(`User com ID ${uid} não encontrado.`);
        return null;
    }

    const myLikedMovies = data.myLikedMovies;

    const movies = await getAllMovies();

    if (!movies) return null;

    const myLikedMoviesListMovies = myLikedMovies
        .map((id) => movies.find((movie) => movie.id === id))
        .filter((movie): movie is NonNullable<typeof movie> => movie !== undefined);

    return myLikedMoviesListMovies;
};

export const isMovieLiked = async (movieId: string) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user && user.uid) {
        const uid = user.uid;

        const db = getFirestore();
        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);

        const data = userSnap.data();

        if (!data) {
            console.error(`Usuário com ID ${uid} não encontrado.`);
            return false;
        }

        const existingMyLikedMovies = (data.myLikedMovies || []) as string[];

        return existingMyLikedMovies.includes(movieId);
    }

    return false;
};

export const setUserSearchHistory = async (search: string) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!(user && user.uid)) return;

    const uid = user.uid;
    const db = getFirestore();
    const userRef = doc(db, 'users', uid as string);
    const userSnap = await getDoc(userRef);

    const data = userSnap.data();

    if (!data) {
        console.error(`User com ID ${uid} não encontrado.`);
        return;
    };

    const userData = {
        id: userSnap.id,
        ...data,
    } as User;

    const filteredHistory = userData.searchHistory.filter(
        (item) => item !== search
    );

    const updatedHistory = [search, ...filteredHistory].slice(0, 8);

    await updateDoc(userRef, {
        searchHistory: updatedHistory,
    });
};

export const getUserSearchHistory = (
    onCommentsUpdate: (comments: User['searchHistory'] | null) => void
) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!(user && user.uid)) return;

    const uid = user.uid;
    const db = getFirestore();
    const userRef = doc(db, 'users', uid);

    const unsubscribe = onSnapshot(userRef, (docSnap) => {
        if (!docSnap.exists()) {
            onCommentsUpdate(null);
            return;
        }

        const data = docSnap.data() as User;

        onCommentsUpdate(data.searchHistory ?? null);
    });

    return unsubscribe;
};
