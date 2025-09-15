import { useRouter } from "expo-router";
import {
    AppRoutes,
    usePathName,
} from "./usePathname";

export function useBackNavigation() {
    const router = useRouter();
    const pathname = usePathName();

    function resolveBackNavigation() {

        const backTimes: Partial<Record<AppRoutes, number>> = {
            '/more': 2,
            '/comments': 2,
            '/answers': 3,
        };

        const times = backTimes[pathname] ?? 1;

        for (let i = 0; i < times; i++) {
            router.back();
        };
    };

    return { resolveBackNavigation };
};

