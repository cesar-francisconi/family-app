import { Stack } from 'expo-router';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Colors } from '@/src/constants/Colors';
import { AuthorizedUserActionsSheet } from '../../components/AuthorizedUserActionsSheet';
import { CommentReplyFieldSheet } from '../../components/CommentReplyFieldSheet';
import { UnauthorizedUserActionsSheet } from '../../components/UnauthorizedUserActionsSheet';
import { Header } from '@/src/components/Header';

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
          name="emailChange"
          options={{

          }}
        />

        <Stack.Screen
          name="deleteUser"
          options={{

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface.main,
  },
});
