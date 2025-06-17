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
import { Header } from '@/src/components/Header';
import * as SystemUI from 'expo-system-ui';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthorizedUserActionsSheet } from '../components/AuthorizedUserActionsSheet';
import { CommentReplyFieldSheet } from '../components/CommentReplyFieldSheet';
import { UnauthorizedUserActionsSheet } from '../components/UnauthorizedUserActionsSheet';

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
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} >
      <SafeAreaView
        style={styles.container}
      >
        <Header />

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
            name="signUp"
            options={{

            }}
          />

          <Stack.Screen
            name="(details)"
            options={{

            }}
          />

          <Stack.Screen
            name="actorDetails"
            options={{

            }}
          />

          <Stack.Screen
            name="search"
            options={{

            }}
          />

          <Stack.Screen
            name="explorer"
            options={{

            }}
          />

          <Stack.Screen
            name="account"
            options={{

            }}
          />

          <Stack.Screen
            name="myList"
            options={{

            }}
          />

          <Stack.Screen
            name="moviesYouLiked"
            options={{

            }}
          />

          <Stack.Screen
            name="passwordChange"
            options={{

            }}
          />

          <Stack.Screen
            name="(more)"
            options={{
              presentation: 'transparentModal',
              animation: 'fade',
            }}
          />

          <Stack.Screen
            name="notifications"
            options={{

            }}
          />

          <Stack.Screen name="(tabs)" />
        </Stack >

        <AuthorizedUserActionsSheet
          replyTitle='Responder'
          editTitle='Editar'
          deleteTitle='Deletar'
        />

        <UnauthorizedUserActionsSheet
          replyTitle='Responder'
        />

        <CommentReplyFieldSheet />

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
