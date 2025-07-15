import {
    EmailAuthProvider,
    getAuth,
    reauthenticateWithCredential,
    signOut,
    verifyBeforeUpdateEmail,
} from "@react-native-firebase/auth";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";

interface HandleChangeEmailProps {
    confirmEmail: string;
    confirmPassword: string;
    newEmail: string;
};

export const handleChangeEmail = async ({
    confirmEmail,
    confirmPassword,
    newEmail,
}: HandleChangeEmailProps) => {
    const auth = getAuth();
    const user = auth.currentUser;

    try {
        if (!user?.email) return;

        if (confirmEmail !== user.email) {
            const error: any = new Error('O email confirmado não bate com o email da conta.');
            error.code = 'confirmed-email-mismatch';
            throw error;
        }

        const credential = EmailAuthProvider.credential(confirmEmail, confirmPassword);

        await reauthenticateWithCredential(user, credential);
        await verifyBeforeUpdateEmail(user, newEmail);

        Toast.show({
            type: 'customSuccess',
            text1: 'Verifique seu novo e-mail!',
            text2: 'Verificação enviada. Confirme no novo endereço para concluir a troca.',
            position: 'top',
            visibilityTime: 6000,
        });

        await signOut(auth);
    } catch (error: any) {
        // Lance o erro para o chamador tratar
        throw error;
    }
};
