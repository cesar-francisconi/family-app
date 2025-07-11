import { AuthSuggestion } from '@/src/components/AuthSuggestion';
import { Button } from '@/src/components/Button';
import { Icon } from '@/src/components/Icon';
import { Input } from '@/src/components/Input';
import { InputTwoGroup } from '@/src/components/InputTwoGroup';
import { Or } from '@/src/components/Or';
import { Welcome } from '@/src/components/Welcome';
import { Colors } from '@/src/constants/Colors';
import { styles } from '@/src/screen/SignIn/styles';
import { SignInProps } from '@/src/screen/SignIn/types';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { handleSignIn } from '@/src/helpers/handleSignIn';
import { handleGoogleAuth } from '@/src/helpers/handleGoogleAuth';
import { useForm } from 'react-hook-form';
import {
  FormDataSignIn,
  formSchemaSignIn,
} from '@/src/helpers/formSchemaSignIn';

export default function SignIn(props: SignInProps) {

  const { } = props;

  const route = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
  } = useForm<FormDataSignIn>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchemaSignIn),
  });

  const onSubmit = (data: FormDataSignIn) => {
    handleSignIn({
      email: data.email,
      password: data.password,
      setIsLoading,
    });
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
                name='email'
                control={control}
                variant='filled'
                state='default'
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
                name='password'
                control={control}
                variant='filled'
                state='default'
                withLabel={false}
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
            onPress={handleSubmit(onSubmit)}
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

        <Button
          onPress={() => handleGoogleAuth('signIn')}
          type='secondary'
          variant='filled'
          title='Continue com Google'
          borderRadius='medium'
          leftIcon={
            <Icon
              name='AntDesign'
              icon='google'
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