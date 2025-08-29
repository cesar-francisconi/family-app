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
import { Indicator } from '@/src/components/Indicator';
import { useMemo } from 'react';
import { CloseButton } from '@/src/components/CloseButton';
import { screenHeight } from '@/src/constants/ScreenDimensions';

const detailsMovieCardHeight = 216;

type Routes = 'comments' | 'answers'

export default function RootLayoutNav() {

  const translateY = useSharedValue(0);

  const navigationRef = useNavigationContainerRef();
  const route = useRouter();

  const getRouteName = navigationRef.getCurrentRoute as () => { name: Routes } | undefined;

  // Função para voltar na navegação quando a animação terminar
  const handleClose = () => {
    const current = getRouteName()?.name;
    if (current === 'comments') {
      route.back();
    } else if (current === 'answers') {
      route.back();
      route.back();
    }
  };

  const bottomSheetHeight = useMemo(() => {
    return screenHeight - (detailsMovieCardHeight + headerHeight);
  }, []);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      // Não permite mover para cima (negativo), só para baixo (positivo)
      translateY.value = Math.max(0, event.translationY);
    })
    .onEnd(() => {
      const threshold = Math.floor(bottomSheetHeight * 0.2);

      if (translateY.value > threshold) {
        // Anima para baixo até sumir (tela toda) e depois executa o route.back()
        translateY.value = withTiming(bottomSheetHeight, { duration: 250 }, (isFinished) => {
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
      [0, bottomSheetHeight],
      [1, 0],
      Extrapolation.CLAMP
    );
    return {
      opacity,
      // ocupa todo o espaço do container
    };
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.renderbackDrop, animatedBlackDropStyle]} />
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.content, animatedStyle]}>
          <Indicator />
          <Stack
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
              name="comments"
              options={{
                title: 'Comentários',
                headerBackVisible: false,
              }}
            />
            <Stack.Screen
              name="answers"
              options={{
                title: 'Respostas',
              }}
            />
          </Stack>
        </Animated.View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    backgroundColor: Colors.surface.container,
  },
  renderbackDrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.surface.main,
  },
});
