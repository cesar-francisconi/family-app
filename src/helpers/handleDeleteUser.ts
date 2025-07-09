import {
    deleteUser,
    EmailAuthProvider,
    getAuth,
    reauthenticateWithCredential,
} from "@react-native-firebase/auth";
import {
    deleteDoc,
    doc,
    getFirestore,
} from "@react-native-firebase/firestore";
import { Alert } from "react-native";

interface HandleDeleteUserProps {
    confirmEmail: string;
    confirmPassword: string;
};

export const handleDeleteUser = async ({
    confirmEmail,
    confirmPassword,
}: HandleDeleteUserProps) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user?.email) return;

    if (confirmEmail !== user.email) {
        Alert.alert('Erro', 'O email confirmado não bate com o seu email de login.');
        return;
    }

    const credential = EmailAuthProvider.credential(confirmEmail, confirmPassword);

    try {
        await reauthenticateWithCredential(user, credential);

        const db = getFirestore();
        const userRef = doc(db, 'users', user.uid);
        await deleteDoc(userRef);

        await deleteUser(user);
        Alert.alert('Sucesso', 'Conta do usuário deletada!');
    } catch (error: any) {
        if (error.code === 'auth/invalid-credential') {
            Alert.alert('Erro', 'Senha atual incorreta.');
        } else {
            Alert.alert('Erro', error.message || 'Erro ao deletar conta.');
        }
    }
};