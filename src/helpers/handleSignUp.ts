import {
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
    updateProfile,
} from "@react-native-firebase/auth";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

interface HandleSignUpProps {
    email: string;
    name: string;
    lastName: string;
    password: string;
};

export const handleSignUp = async ({
    email,
    name,
    lastName,
    password,
}: HandleSignUpProps) => {
    const auth = getAuth();
    const usernameLowerCase = `${name}${lastName}`.toLowerCase();
    const route = useRouter();

    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(user, {
            displayName: usernameLowerCase,
        });

        await sendEmailVerification(user);

        Alert.alert('', 'Email de verificação enviado.');
        route.back();
    } catch (error: any) {
        // Lance o erro para o chamador tratar
        throw error;
    }
};