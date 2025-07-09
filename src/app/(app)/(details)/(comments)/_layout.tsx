import {
  Stack,
  useNavigationContainerRef,
  useRouter,
} from 'expo-router';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Colors } from '@/src/constants/Colors';
import { headerHeight } from '@/src/components/Header';
import { CloseButton } from '@/src/components/CloseButton';
import { detailsMovieCardHeight } from '..';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';
import { getScreenHeight } from '@/src/helpers/getScreenHeight';
import { Indicator } from '@/src/components/Indicator';

type Routes = 'comment' | 'answers'

export default function RootLayoutNav() {

  const translateY = useSharedValue(0);
  const screenHeight = Dimensions.get('window').height;

  const navigationRef = useNavigationContainerRef();
  const route = useRouter();

  const getRouteName = navigationRef.getCurrentRoute as () => { name: Routes } | undefined;

  // Função para voltar na navegação quando a animação terminar
  const handleClose = () => {
    const current = getRouteName()?.name;
    if (current === 'comment') {
      route.back();
    } else if (current === 'answers') {
      route.back();
      route.back();
    }
  };

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      // Não permite mover para cima (negativo), só para baixo (positivo)
      translateY.value = Math.max(0, event.translationY);
    })
    .onEnd(() => {
      const threshold = Math.floor((screenHeight - (detailsMovieCardHeight + headerHeight)) * 0.3);

      if (translateY.value > threshold) {
        // Anima para baixo até sumir (tela toda) e depois executa o route.back()
        translateY.value = withTiming(screenHeight, { duration: 250 }, (isFinished) => {
          if (isFinished) {
            runOnJS(handleClose)();
          }
        });
      } else {
        // Caso contrário, volta para posição inicial
        translateY.value = withTiming(0);
      }
    });

  // Estilo animado do BlackDrop: opacidade de 1 (total preto) para 0 conforme translateY cresce
  const animatedBlackDropStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [0, screenHeight - (detailsMovieCardHeight + headerHeight)],
      [1, 0],
      Extrapolation.CLAMP
    );
    return {
      opacity,
      // ocupa todo o espaço do container
      backgroundColor: Colors.surface.main,
    };
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <SafeAreaView style={styles.container}>
        <Animated.View style={[styles.renderbackDrop, animatedBlackDropStyle]} />
        <Animated.View style={[styles.content, animatedStyle]}>
          <Indicator />
          <Stack
            initialRouteName="comment"
            screenOptions={{
              animation: 'flip',
              presentation: 'transparentModal',
              headerTintColor: Colors.surface.on,
              headerStyle: {
                backgroundColor: Colors.surface.container,
              },
              headerShadowVisible: false,
              contentStyle: {
                backgroundColor: Colors.surface.container,
              },
              headerRight: () => (
                <CloseButton onPress={() => {
                  translateY.value = withTiming(screenHeight, { duration: 300 }, (isFinished) => {
                    if (isFinished) {
                      runOnJS(handleClose)();
                    }
                  });
                }} />
              ),
            }}
          >
            <Stack.Screen
              name={"comment" as Routes}
              options={{
                animation: 'none',
                title: 'Comentários',
                headerBackVisible: false,
              }}
            />
            <Stack.Screen
              name={"answers" as Routes}
              options={{
                title: 'Respostas',
              }}
            />
          </Stack>
        </Animated.View>
      </SafeAreaView>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: detailsMovieCardHeight + headerHeight,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  renderbackDrop: {
    position: 'absolute',
    width: '100%',
    height: getScreenHeight,
    marginTop: detailsMovieCardHeight + headerHeight,
  },
});
