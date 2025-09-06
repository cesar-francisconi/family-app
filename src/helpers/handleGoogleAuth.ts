import {
    getAuth,
    GoogleAuthProvider,
    sendEmailVerification,
    signInWithCredential,
} from "@react-native-firebase/auth";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    setDoc,
    Timestamp,
    where,
} from "@react-native-firebase/firestore";
import {
    GoogleSignin,
    statusCodes,
} from "@react-native-google-signin/google-signin";
import { Alert } from "react-native";
import { getRandomColor } from "./getRandomColor";
import uuid from 'react-native-uuid';
import { useRouter } from "expo-router";

type GoogleAuthMode = 'signIn' | 'signUp';

export const handleGoogleAuth = async (mode: GoogleAuthMode) => {
    try {
        const route = useRouter();
        await GoogleSignin.hasPlayServices();
        // Força mostrar a tela de escolha de contas
        await GoogleSignin.signOut();
        const result = await GoogleSignin.signIn();

        if (!result.data || !result.data.idToken) {
            console.log("Erro: idToken não retornado.");
            return;
        }

        const authInstance = getAuth();
        const credential = GoogleAuthProvider.credential(result.data.idToken);

        // ⚠️ Primeiro, faz login/cadastro no Firebase Auth
        const userCredential = await signInWithCredential(authInstance, credential);
        const user = userCredential.user;

        const db = getFirestore();
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        const userExists = userSnap.exists();

        // ✅ Verificações baseadas na tela
        if (mode === "signIn") {
            if (!userExists) {
                await authInstance.signOut();
                Alert.alert("Conta não encontrada", "Cadastre-se primeiro com esta conta Google.");
                return;
            }
        }

        if (mode === "signUp") {
            if (userExists) {
                await authInstance.signOut();
                Alert.alert("Conta já existe", "Faça login em vez de se cadastrar.");
                return;
            }

            // ⚠️ Criação do documento no Firestore (cadastro)
            const background = getRandomColor();
            let baseUsername = user.displayName?.trim() || "user";
            let username = `@${baseUsername}`;
            let usernameExists = true;

            const checkUsernameExists = async (usernameToCheck: string) => {
                const q = query(
                    collection(db, "users"),
                    where("username", "==", usernameToCheck)
                );
                const querySnapshot = await getDocs(q);
                return !querySnapshot.empty;
            };

            while (usernameExists) {
                usernameExists = await checkUsernameExists(username);
                if (usernameExists) {
                    const suffix = uuid.v4().toString().slice(0, 5);
                    username = `@${baseUsername}-${suffix}`;
                }
            }

            await setDoc(userRef, {
                createdAt: Timestamp.fromMillis(
                    new Date(user.metadata.creationTime || Date.now()).getTime()
                ),
                email: user.email,
                username,
                background,
                avatar: user.photoURL,
                searchHistory: ["ação", "ficção", "romance"],
                myList: [],
                myLikedMovies: [],
                isGoogleAccount: true,
            });
        }

        // ✅ Validação extra: e-mail verificado
        if (!user.emailVerified) {
            Alert.alert("", "Confirme o cadastro no seu email!");
            await sendEmailVerification(user);
            return;
        }

        // 🔁 Atualização do email no Firestore se necessário
        if (userExists) {
            const docData = userSnap.data()!;
            if (docData.email !== user.email) {
                await setDoc(userRef, { email: user.email }, { merge: true });
            }
        }

        route.replace("/(app)/(tabs)/home");
    } catch (error: any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log("Login cancelado pelo usuário");
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log("Login em progresso");
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log("Google Play Services não está disponível");
        } else {
            console.log("[DEBUG] Erro no login/cadastro com Google:", error);
        }
    }
};