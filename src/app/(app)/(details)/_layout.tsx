import {
    Stack,
} from 'expo-router';
import { detailsMovieCardHeight } from '.';
import { headerHeight } from '@/src/components/Header';

export default function RootLayoutNav() {

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'ios_from_right',
                contentStyle: {
                    backgroundColor: 'transparent',
                }
            }}
        >
            <Stack.Screen
                name="index"
                options={{

                }}
            />

            <Stack.Screen
                name="(more)"
                options={{
                    presentation: 'transparentModal',
                    animation: 'slide_from_bottom',
                }}
            />

            <Stack.Screen
                name="(comments)"
                options={{
                    presentation: 'transparentModal',
                    animation: 'slide_from_bottom',
                }}
            />
        </Stack >
    );
};
