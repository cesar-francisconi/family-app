import { Stack } from 'expo-router';

export default function RootLayoutNav() {

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
