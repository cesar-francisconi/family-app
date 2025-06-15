import { create } from 'zustand'
import { getAllMovies } from './useMovie';

const initialState: {
    id: string;
    username: string;
    avatar: string;
    searchHistory: string[];
    myList: string[];
    myLikedMovies: string[];
} = {
    id: 'ffkfeffefe-fefefefeee-ggegegeg-gegege',
    username: '@cesarbranquelo',
    avatar: 'https://scontent.frao3-1.fna.fbcdn.net/v/t1.6435-9/93158956_105020071174869_1995309121296924672_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEqrtnwRufPN2GRyZ1RusDZAixBVhpHFasCLEFWGkcVq9AIdXt3dklrbF3MrzppgoEDItbZkrGadFvzZVUm9Mu3&_nc_ohc=-96wTmjvIbcQ7kNvwEQidbc&_nc_oc=Adkpe0AE5LzaYNyOGzxykFGv2l-0AXHXSGHAZNZ0ewnFit4Y64nfN3J8r3irRxkM-GY&_nc_zt=23&_nc_ht=scontent.frao3-1.fna&_nc_gid=vUdntbNVa4s3ti85CS1vPQ&oh=00_AfI7C5u55qPGh5MsnYtAZclUhavwb4goafq8RPESKKe68A&oe=684E11A8',
    searchHistory: ['matrix', 'hobbit', 'cesar pizza', 'brodowski', 'carla', 'beatriz', 'senhor dos anéis'],
    myList: [],
    myLikedMovies: [],
};

export const useUser = create(() => initialState);

export const getUser = () => useUser.getState();

export const addToMyList = (id: string) => useUser.setState((state) => {
    return {
        ...state,
        myList: [...state.myList, id]
    };
});

export const removeFromMyList = (id: string) => useUser.setState((state) => {
    const myList = getMyList();

    const newMyList = myList.filter((movieId) => movieId !== id);

    return {
        ...state,
        myList: newMyList,
    };
});

export const getMyList = () => useUser.getState().myList;

export const getMyListMovies = () => {
    const myList = getMyList();

    const movies = getAllMovies();

    const myListMovies = movies.filter((movie) => {
        return myList.some((id) => id === movie.id);
    });

    return myListMovies;
};

export const isMovieInMyList = (id: string) => {
    const result = getMyList().some((movieId) => id === movieId);

    return result;
};

export const addToLikedMovies = (id: string) => useUser.setState((state) => {
    return {
        ...state,
        myLikedMovies: [...state.myLikedMovies, id],
    };
});

export const removeFromLikedMovies = (id: string) => useUser.setState((state) => {
    const myLikedMoviesList = getMyLikedMoviesList();

    const newMyLikedMoviesList = myLikedMoviesList.filter((movieId) => movieId !== id);

    return {
        ...state,
        myLikedMovies: newMyLikedMoviesList,
    };
});

export const getMyLikedMoviesList = () => useUser.getState().myLikedMovies;

export const getMyLikedMoviesListMovies = () => {
    const myLikedMoviesList = getMyLikedMoviesList();

    const movies = getAllMovies();

    const myLikedMoviesListMovies = movies.filter((movie) => {
        return myLikedMoviesList.some((id) => id === movie.id);
    });

    return myLikedMoviesListMovies;
};

export const isMovieLiked = (id: string) => {
    const result = getMyLikedMoviesList().some((movieId) => id === movieId);

    return result;
};

export const setSearchHistory = (search: string) =>
    useUser.setState((state) => {
        // Remove o termo, se já existir
        const filteredHistory = state.searchHistory.filter(
            (item) => item !== search
        );

        // Coloca o termo no início e limita a 8 itens
        const updatedHistory = [search, ...filteredHistory].slice(0, 8);

        return {
            searchHistory: updatedHistory,
        };
    });
