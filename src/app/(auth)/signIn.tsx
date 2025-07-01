import { AuthSuggestion } from '@/src/components/AuthSuggestion';
import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { InputTwoGroup } from '@/src/components/InputTwoGroup';
import { Or } from '@/src/components/Or';
import { VerticalButtonGroup } from '@/src/components/VerticalButtonGroup/Index';
import { Welcome } from '@/src/components/Welcome';
import { Colors } from '@/src/constants/Colors';
import { getRandomColor } from '@/src/helpers/getRandomColor';
import { styles } from '@/src/screen/SignIn/styles';
import { SignInProps } from '@/src/screen/SignIn/types';
import {
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from '@react-native-firebase/auth';
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  Timestamp,
} from '@react-native-firebase/firestore';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  View,
} from 'react-native';

export default function SignIn(props: SignInProps) {

  const { } = props;

  const route = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    const auth = getAuth();

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      if (!user.emailVerified) {
        Alert.alert('', 'Confirme o cadastro no seu email!');
        await sendEmailVerification(user);
        return;
      };

      const db = getFirestore();
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        const background = getRandomColor();

        await setDoc(userRef, {
          createdAt: Timestamp.fromMillis(
            new Date(user.metadata.creationTime || Date.now()).getTime()
          ),
          email: user.email,
          username: `@${user.displayName}`,
          background,
          avatar: null,
          searchHistory: ['ação', 'ficção', 'romance'],
          myList: [],
          myLikedMovies: [],
        });
      } else {
        const docData = userSnap.data()!;

        if (docData.email !== user.email) {
          await setDoc(
            userRef,
            {
              email: user.email,
            },
            { merge: true }
          );
        }
      };

      route.replace('/(app)/(tabs)/home');
    } catch (error: any) {
      console.log('Erro ao fazer login:', error.code, error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Welcome
        title={'Bem vindo(a) ao' + '\n' + 'App Family!'}
        description='Coloque seu e-mail e senha para entrar'
      />

      <View
        style={styles.actionContainer}
      >
        <View
          style={styles.firstActionContainer}
        >
          <InputTwoGroup
            firstInput={
              <Input
                variant='filled'
                state='default'
                value={email}
                onChangeText={setEmail}
                withLabel={false}
                placeholder='Seu e-mail aqui...'
                keyboardType='email-address'
                leftIcon={
                  <Icon
                    name='MaterialCommunityIcons'
                    icon='email-outline'
                  />
                }
              />
            }

            secondInput={
              <Input
                variant='filled'
                state='default'
                withLabel={false}
                value={password}
                onChangeText={setPassword}
                placeholder='Sua senha aqui...'
                withHelpMessageAndLabelCheck
                helpMessage='Esqueceu sua senha?'
                helpMessageColor={Colors.primary.main}
                labelCheckLabel='Lembrar-me?'
                secureTextEntry
                keyboardType='numeric'
                leftIcon={
                  <Icon
                    name='Feather'
                    icon='lock'
                  />
                }
                rightIcon={
                  <Icon
                    name='Feather'
                    icon='eye-off'
                  />
                }
              />
            }
          />

          <Button
            onPress={handleSignIn}
            type='primary'
            variant='filled'
            size='medium'
            title='Entrar'
            borderRadius='medium'
          />
        </View>

        <Or
          text='Ou'
        />

        <VerticalButtonGroup
          firstButton={
            <Button
              type='secondary'
              variant='filled'
              title='Continue com Google'
              leftIcon={
                <Icon
                  name='AntDesign'
                  icon='google'
                />
              }
            />
          }
          secondButton={
            <Button
              type='secondary'
              variant='filled'
              title='Continue com Facebook'
              leftIcon={
                <Icon
                  name='MaterialCommunityIcons'
                  icon='facebook'
                />
              }
            />
          }
        />

        <AuthSuggestion
          firstText='Não tem uma conta?'
          secondText='Cadastre-se.'
          fnSecondText={() => {
            route.navigate('/signUp');
          }}
        />
      </View>
    </SafeAreaView>
  );
}