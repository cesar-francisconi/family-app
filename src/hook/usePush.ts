import {
    Href,
    useRouter,
} from "expo-router";
import { NavigationOptions } from "expo-router/build/global-state/routing";
import { useCallback } from "react";
import { useDebounce } from "../helpers/debounce";

interface UsePushProps {
    href: Href;
    options?: NavigationOptions;
    bounceRate?: number;
};

export const usePush = ({ href, options, bounceRate = 1000 }: UsePushProps) => {
    const route = useRouter();
    const { debounce } = useDebounce();

    return useCallback(() => {
        debounce(() => {
            route.push(href, options);
        }, bounceRate);
    }, [debounce]);
};