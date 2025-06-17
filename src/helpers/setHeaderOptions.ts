import {
    useSegments,
} from "expo-router";
import { HeaderRightProps } from "../components/HeaderRight/types";

interface HeaderOptions {
    category: string;
    actorName: string;
    transparentBackground: boolean;
    withBottomStroke: boolean;
    withHeaderActions: boolean;
    withHeaderLeft: boolean;
    withHeaderRight: boolean;
    headerRightOptions: HeaderRightProps;
    pointerEvents: "auto" | "box-none" | "none" | "box-only" | undefined;
}

export type RouteKey =
    | 'signIn' | 'signUp' | 'home' | 'categories' | 'me' | 'search'
    | 'explorer' | 'details' | 'more' | 'actorDetails'
    | 'moviesYouLiked' | 'myList' | 'account' | 'passwordChange';

export type SetHeaderOptionsProps = {
    [key in RouteKey]: HeaderOptions;
};


export function setHeaderOptions(props: SetHeaderOptionsProps) {
    const segments = useSegments();
    const stack = segments[0];
    const tab = segments[1];

    const routeMap: { [key: string]: RouteKey } = {
        undefined: 'signIn',
        signUp: 'signUp',
        search: 'search',
        explorer: 'explorer',
        '(details)': 'details',
        '(more)': 'more',
        actorDetails: 'actorDetails',
        moviesYouLiked: 'moviesYouLiked',
        myList: 'myList',
        account: 'account',
        passwordChange: 'passwordChange',
    };

    const tabMap: { [key: string]: RouteKey } = {
        undefined: 'home',
        categories: 'categories',
        me: 'me',
    };

    let routeKey: RouteKey;

    if (stack === '(tabs)') {
        routeKey = tab !== undefined ? tabMap[tab] ?? 'home' : 'home';
    } else {
        routeKey = routeMap[stack] ?? 'signIn';
    }

    return props[routeKey];
}
