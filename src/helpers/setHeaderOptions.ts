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
    | 'signIn' | 'signUp' | 'resetPassword' | 'home' | 'categories' | 'me' | 'search'
    | 'explorer' | 'details' | 'actorDetails'
    | 'moviesYouLiked' | 'myList' | 'account' | 'passwordChange' | 'usernameChange' | 'deleteUser' | 'emailChange';

export type SetHeaderOptionsProps = {
    [key in RouteKey]: HeaderOptions;
};


export function setHeaderOptions(props: SetHeaderOptionsProps) {
    const segments = useSegments();
    const stack = segments[1];
    const tab = segments[2];

    const routeMap: { [key: string]: RouteKey } = {
        signIn: 'signIn',
        signUp: 'signUp',
        resetPassword: 'resetPassword',
        search: 'search',
        explorer: 'explorer',
        '(details)': 'details',
        actorDetails: 'actorDetails',
        moviesYouLiked: 'moviesYouLiked',
        myList: 'myList',
        account: 'account',
        passwordChange: 'passwordChange',
        usernameChange: 'usernameChange',
        deleteUser: 'deleteUser',
        emailChange: 'emailChange',
    };

    const tabMap: { [key: string]: RouteKey } = {
        home: 'home',
        categories: 'categories',
        me: 'me',
    };

    let routeKey: RouteKey;

    if (stack === '(tabs)') {
        routeKey = tab !== undefined ? tabMap[tab] ?? 'home' : 'home';
    } else if (stack && stack in routeMap) {
        routeKey = routeMap[stack];
    } else {
        routeKey = 'signIn';
    }

    return props[routeKey];
}
