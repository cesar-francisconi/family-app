import { useEffect } from 'react';
import { router } from 'expo-router';
import {
    getAuth,
    onAuthStateChanged,
} from '@react-native-firebase/auth';

export default function Index() {
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && user.emailVerified) {
                // Usuário logado e com e-mail verificado
                router.replace('/(app)/(tabs)/home');
            } else {
                // Usuário não logado ou e-mail não verificado
                router.replace('/(auth)/signIn');
            }
        });

        return () => unsubscribe();
    }, []);

    return null; // ou <SplashScreen /> se quiser
}
