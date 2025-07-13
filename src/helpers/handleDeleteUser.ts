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
        const error: any = new Error('O email confirmado não bate com o email da conta.');
        error.code = 'confirmed-email-mismatch';
        throw error;
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
        // Lance o erro para o chamador tratar
        throw error;
    }
};