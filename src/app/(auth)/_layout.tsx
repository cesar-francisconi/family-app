import { Header } from '@/src/components/Header';
import { Colors } from '@/src/constants/Colors';
import { Stack } from 'expo-router';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

export default function RootLayoutNav() {

  return (
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
          },
        }}
      >


        <Stack.Screen
          name="signIn"
          options={{

          }}
        />

        <Stack.Screen
          name="signUp"
          options={{

          }}
        />

        <Stack.Screen
          name="resetPassword"
          options={{

          }}
        />
      </Stack >
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface.main,
  },
});