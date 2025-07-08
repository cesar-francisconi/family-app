import {
  useFonts,
  Roboto_700Bold,
  Roboto_600SemiBold,
  Roboto_500Medium,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import {
  LogBox,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Colors } from '@/src/constants/Colors';
import * as SystemUI from 'expo-system-ui';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '1081773549120-d8sevegtld10b4nflpgruulfdiepoetp.apps.googleusercontent.com',
  offlineAccess: true, // opcional, apenas se você quiser acessar APIs do Google pelo seu servidor
});

SplashScreen.preventAutoHideAsync();

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
]);

export default function RootLayoutNav() {

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(Colors.surface.container);
  }, []);

  const [loaded, error] = useFonts({
    Roboto_700Bold,
    Roboto_600SemiBold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }} >
      <SafeAreaView
        style={styles.container}
      >
        <Stack
          screenOptions={{
            headerShown: false,
            animation: 'none',
            contentStyle: {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Stack.Screen name="(app)" />

          <Stack.Screen name="(auth)" />
        </Stack >

        <StatusBar barStyle={'light-content'} backgroundColor={Colors.surface.main} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface.main,
  },
});
