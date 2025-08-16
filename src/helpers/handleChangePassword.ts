import { EmailAuthProvider, getAuth, reauthenticateWithCredential, signOut, updatePassword } from "@react-native-firebase/auth";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";

interface HandleChangePasswordProps {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
};

export const handleChangePassword = async ({
    currentPassword,
    newPassword,
    confirmNewPassword,
}: HandleChangePasswordProps) => {
    if (newPassword !== confirmNewPassword) {
        const error: any = new Error('As senhas não coincidem.');
        error.code = 'new-password-mismatch';
        throw error;
    }

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user?.email) return;

    try {
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);

        Toast.show({
            type: 'customSuccess',
            text2: 'Senha atualizada com sucesso!',
            position: 'top',
            visibilityTime: 1700,
        });
    } catch (error: any) {
        // Lance o erro para o chamador tratar
        throw error;
    }
};