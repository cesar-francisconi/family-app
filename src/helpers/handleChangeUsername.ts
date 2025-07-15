import {
    doc,
    getFirestore,
    updateDoc,
} from "@react-native-firebase/firestore";
import { checkIfUsernameAlreadyExists } from "./checkIfUsernameAlreadyExists";
import Toast from 'react-native-toast-message';
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

    // ✅ Toast de sucesso
    Toast.show({
        type: 'customSuccess',
        text1: 'Sucesso',
        text2: 'Nome de usuário alterado com sucesso!',
        position: 'top',
        visibilityTime: 3000,
    });

    setLoggedInUser();
};