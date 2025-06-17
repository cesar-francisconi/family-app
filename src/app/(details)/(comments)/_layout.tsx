import {
  Stack,
  useNavigationContainerRef,
  useRouter,
} from 'expo-router';
import {
  StyleSheet,
} from 'react-native';
import { Colors } from '@/src/constants/Colors';
import BottomSheet, {
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {
  useCallback,
  useRef,
} from 'react';
import { headerHeight } from '@/src/components/Header';
import { CloseButton } from '@/src/components/CloseButton';
import { useBottomSheetBackdrop } from '@/src/helpers/renderBackdrop';
import { snapPoints } from '@/src/helpers/snapPoints';
import { getScreenHeight } from '@/src/helpers/getScreenHeight';
import { detailsMovieCardHeight } from '..';

type Routes = 'comment' | 'answers'

export default function RootLayoutNav() {

  const bottomSheetRef = useRef<BottomSheet>(null);

  const navigationRef = useNavigationContainerRef();

  const getRouteName = navigationRef.getCurrentRoute as () => { name: Routes } | undefined;

  const route = useRouter();

  const renderBackdrop = useBottomSheetBackdrop({
    pressBehavior: 'none',
    opacity: 1,
    onPress: () => {

    },
    style: styles.renderBackdrop,
  });

  const handleSheetChanges = useCallback((index: number) => {
    const current = getRouteName()?.name;
    if (index === -1) {
      if (current === 'answers') route.back();
      route.back();
    }
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      enablePanDownToClose
      index={0}
      onChange={handleSheetChanges}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      backgroundStyle={styles.backgroundStyle}
      snapPoints={snapPoints()}
      backdropComponent={renderBackdrop}
      containerStyle={styles.containerStyle}
    >
      <BottomSheetView style={styles.container}>
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
            headerRight: () => {
              return <CloseButton
                onPress={() => bottomSheetRef.current?.close()}
              />;
            }
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
        </Stack >
      </BottomSheetView >
    </BottomSheet >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface.main,
  },
  handleIndicatorStyle: {
    backgroundColor: Colors.surface.containerExtraHigh,
  },
  backgroundStyle: {
    backgroundColor: Colors.surface.container,
  },
  containerStyle: {
    height: getScreenHeight,
  },
  renderBackdrop: {
    marginTop: detailsMovieCardHeight + headerHeight,
  },
});
