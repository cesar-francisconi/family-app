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

interface HandleDeleteGoogleUserProps {
    confirmEmail: string;
};

export const handleDeleteGoogleUser = async ({
    confirmEmail,
}: HandleDeleteGoogleUserProps) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        Alert.alert('Erro', 'Nenhum usuário logado.');
        return;
    };

    if (!user?.email) return;

    if (confirmEmail !== user.email) {
        Alert.alert('Erro', 'O email confirmado não bate com o seu email de login.');
        return;
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

        Alert.alert('Sucesso', 'Conta Google deletada com sucesso.');
    } catch (error: any) {
        if (error.code === 'auth/user-mismatch') {
            Alert.alert('Erro', 'Conta Google não corresponde à conta logada.');
        } else {
            Alert.alert('Erro', error.message || 'Erro ao deletar conta.');
        }
    }
};