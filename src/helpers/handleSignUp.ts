import {
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
    updateProfile,
} from "@react-native-firebase/auth";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import { checkIfUsernameAlreadyExists } from "./checkIfUsernameAlreadyExists";

interface HandleSignUpProps {
    email: string;
    name: string;
    lastName: string;
    password: string;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const handleSignUp = async ({
    email,
    name,
    lastName,
    password,
    setIsLoading,
}: HandleSignUpProps) => {
    setIsLoading(true);

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
        console.log('Erro ao cadastrar:', error.code, error.message);
        Alert.alert('Erro', 'Não foi possível criar a conta.');
    }

    setIsLoading(false);
};