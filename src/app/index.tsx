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
            if (user && user.email) {
                router.replace('/(app)/(tabs)/home'); // usuário logado
            } else {
                router.replace('/(auth)/signIn'); // usuário não logado
            }
        });

        return () => unsubscribe();
    }, []);

    return null; // ou <SplashScreen /> se quiser
}
