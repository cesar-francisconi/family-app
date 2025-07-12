import {
    getAuth,
    sendEmailVerification,
    signInWithEmailAndPassword,
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
import { getRandomColor } from "./getRandomColor";
import uuid from 'react-native-uuid';
import { useRouter } from "expo-router";

export interface HandleSignInProps {
    email: string;
    password: string;
};

export const handleSignIn = async ({
    email,
    password,
}: HandleSignInProps) => {
    const route = useRouter();

    const auth = getAuth();

    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);

        if (!user.emailVerified) {
            const error: any = new Error('email-not-verified');
            error.user = user; // anexa o user
            throw error;
        };

        const db = getFirestore();
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            const background = getRandomColor();

            let baseUsername = user.displayName?.trim() || 'user';
            let username = `@${baseUsername}`;
            let usernameExists = true;

            // Função auxiliar para verificar se já existe username
            const checkUsernameExists = async (usernameToCheck: string) => {
                const q = query(
                    collection(db, 'users'),
                    where('username', '==', usernameToCheck)
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
                avatar: null,
                searchHistory: ['ação', 'ficção', 'romance'],
                myList: [],
                myLikedMovies: [],
                isGoogleAccount: false,
            });
        } else {
            const docData = userSnap.data()!;

            if (docData.email !== user.email) {
                await setDoc(
                    userRef,
                    {
                        email: user.email,
                    },
                    { merge: true }
                );
            }
        };

        route.replace('/(app)/(tabs)/home');
    } catch (error: any) {
        // Lance o erro para o chamador tratar
        throw error;
    }
};
