import {
    doc,
    getFirestore,
    updateDoc,
} from "@react-native-firebase/firestore";
import { checkIfUsernameAlreadyExists } from "./checkIfUsernameAlreadyExists";
import { Alert } from "react-native";
import { setLoggedInUser } from "../hook/useUser";
import { getAuth } from "@react-native-firebase/auth";

interface HandleChangeUsernameProps {
    newUsername: string;
}

export const handleChangeUsername = async ({
    newUsername,
}: HandleChangeUsernameProps) => {
    const db = getFirestore();
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        console.log('Usuário não encontrado.');
        return;
    }

    const trimmedUsername = newUsername.trim();

    const sanitizedUsername = trimmedUsername.replace(/^@+/, ''); // remove qualquer @ no começo
    const newUsernameWithAt = `@${sanitizedUsername}`;

    // Verifica se já existe um documento com esse username
    const usernameAlreadyExists = await checkIfUsernameAlreadyExists(newUsernameWithAt);

    if (usernameAlreadyExists) {
        const error: any = new Error('Este nome de usuário já está em uso.');
        error.code = 'username-already-in-use';
        throw error;
    }

    // Atualiza o username do usuário atual
    const userRef = doc(db, 'users', user.uid);
    await updateDoc(userRef, {
        username: newUsernameWithAt,
    });

    Alert.alert('', 'Nome de usuário alterado com sucesso!');
    setLoggedInUser();
};