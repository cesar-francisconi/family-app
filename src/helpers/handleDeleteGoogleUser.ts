import {
    deleteUser,
    getAuth,
    GoogleAuthProvider,
    reauthenticateWithCredential,
} from "@react-native-firebase/auth";
import {
    deleteDoc,
    doc,
    getFirestore,
} from "@react-native-firebase/firestore";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";

interface HandleDeleteGoogleUserProps {
    confirmEmail: string;
};

export const handleDeleteGoogleUser = async ({
    confirmEmail,
}: HandleDeleteGoogleUserProps) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user?.email) return;

    if (confirmEmail !== user.email) {
        const error: any = new Error('O email confirmado não bate com o seu email de login.');
        error.code = 'confirmed-email-mismatch';
        throw error;
    }

    try {
        // 🔑 Solicita novo login do Google (reatenticação)
        await GoogleSignin.hasPlayServices();
        const result = await GoogleSignin.signIn();

        if (!result.data || !result.data.idToken) {
            Alert.alert('Erro', 'Não foi possível obter o token da conta Google.');
            return;
        }

        const credential = GoogleAuthProvider.credential(result.data.idToken);
        await reauthenticateWithCredential(user, credential); // 🔐 Reautentica com token Google

        // 🗑️ Remove dados no Firestore
        const db = getFirestore();
        const userRef = doc(db, 'users', user.uid);
        await deleteDoc(userRef);

        // 🧨 Remove conta do Firebase
        await deleteUser(user);

        Toast.show({
            type: 'customSuccess',
            text1: 'Sucesso',
            text2: 'Conta Google deletada com sucesso.',
            position: 'top',
            visibilityTime: 3000,   
        });
    } catch (error: any) {
        // Lance o erro para o chamador tratar
        throw error;
    }
};