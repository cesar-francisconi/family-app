import { usePathname } from "expo-router";

export type AppRoutes = '/' | '/account' | '/actorDetails' | '/details' | '/comment' | '/explorer' | '/moviesYouLiked' | '/myList' | '/passwordChange' | '/search' | '/singUp' | '/categories' | '/me' | '/answers' | '/more';

export function usePathName() {
    const pathname = usePathname() as AppRoutes;

    return pathname;
}