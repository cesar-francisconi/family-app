import {
    Stack,
} from 'expo-router';

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
                name="(comments)"
                options={{
                    presentation: 'transparentModal',
                    animation: 'fade',
                }}
            />
        </Stack >
    );
};
