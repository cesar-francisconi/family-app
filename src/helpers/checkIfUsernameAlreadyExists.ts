import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from "@react-native-firebase/firestore";

export const checkIfUsernameAlreadyExists = async (username: string) => {
    const usernameLowerCase = username.toLowerCase();
    const db = getFirestore();

    const q = query(
        collection(db, 'users'),
        where('username', '==', usernameLowerCase)
    );

    const querySnapshot = await getDocs(q);

    // Retorna true se encontrar pelo menos um documento
    return !querySnapshot.empty;
};
