import {
    Stack,
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
    useRef,
} from 'react';
import { headerHeight } from '@/src/components/Header';
import { CloseButton } from '@/src/components/CloseButton';
import { useHandleSheetChange } from '@/src/helpers/useHandleSheetChange';
import { useBottomSheetBackdrop } from '@/src/helpers/renderBackdrop';
import { snapPoints } from '@/src/helpers/snapPoints';
import { getScreenHeight } from '@/src/helpers/getScreenHeight';
import { detailsMovieCardHeight } from '..';

export default function RootLayoutNav() {

    const bottomSheetRef = useRef<BottomSheet>(null);

    const route = useRouter();

    const renderBackdrop = useBottomSheetBackdrop({
        pressBehavior: 'none',
        opacity: 1,
        onPress: () => {

        },
        style: styles.renderBackdrop,
    });

    const handleChange = useHandleSheetChange(
        () => {
            route.back();
        },
        () => {

        }
    );

    return (
        <BottomSheet
            ref={bottomSheetRef}
            enablePanDownToClose
            index={0}
            onChange={handleChange}
            handleIndicatorStyle={styles.handleIndicatorStyle}
            backgroundStyle={styles.backgroundStyle}
            snapPoints={snapPoints()}
            containerStyle={styles.containerStyle}
            backdropComponent={renderBackdrop}
        >
            <BottomSheetView style={styles.container}>
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
                        headerRight: () => {
                            return <CloseButton
                                onPress={() => bottomSheetRef.current?.close()}
                            />
                        }
                    }}
                >
                    <Stack.Screen
                        name="index"
                        options={{
                            headerBackVisible: false,
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
