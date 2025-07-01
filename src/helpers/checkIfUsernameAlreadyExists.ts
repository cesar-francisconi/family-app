import {
    collection,
    getDocs,
    getFirestore,
    query,
} from "@react-native-firebase/firestore";
import { User } from "../hook/useUser";

export const checkIfUsernameAlreadyExists = async (username: string) => {
    const usernameLowerCase = username.toLowerCase();
    const db = getFirestore();
    const q = query(collection(db, 'users'));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return;

    const users = querySnapshot.docs.map((movie) => {
        return {
            id: movie.id,
            ...movie.data()
        } as User;
    });

    return users.some((user) => user.username === usernameLowerCase);
};