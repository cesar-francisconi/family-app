import { AuthSuggestion } from '@/src/components/AuthSuggestion';
import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { InputTwoGroup } from '@/src/components/InputTwoGroup';
import { Or } from '@/src/components/Or';
import { VerticalButtonGroup } from '@/src/components/VerticalButtonGroup/Index';
import { Welcome } from '@/src/components/Welcome';
import { Colors } from '@/src/constants/Colors';
import { styles } from '@/src/screen/SignIn/styles';
import { SignInProps } from '@/src/screen/SignIn/types';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { handleSignIn } from '@/src/helpers/handleSignIn';

export default function SignIn(props: SignInProps) {

  const { } = props;

  const route = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
                withLabelCheck={false}
                fnHelpMessage={() => {
                  route.push('/(auth)/resetPassword');
                }}
                helpMessageColor={Colors.primary.main}
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
            onPress={() => handleSignIn({
              email,
              password,
              setIsLoading,
            })}
            type='primary'
            variant='filled'
            size='medium'
            title='Entrar'
            isLoading={isLoading}
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