import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import {
    useGlobalSearchParams,
    useRouter,
} from 'expo-router';
import { styles } from './styles';
import { HeaderLeft } from '../HeaderLeft';
import { HeaderRight } from '../HeaderRight';
import { Icon } from '../Icon';
import { getHeaderOptions } from '@/src/helpers/getHeaderOptions';
import {
    HeaderGlobalSearchParams,
    HeaderProps
} from './types';
import { resolveHeaderContainerStyle } from '@/src/helpers/resolveHeaderContainerStyle';

export const Header = React.memo((props: HeaderProps) => {

    const {

    } = props;

    const router = useRouter();
    const headerGlobalSearchParams = useGlobalSearchParams<HeaderGlobalSearchParams>();

    const {
        title,
        transparentBackground,
        withBottomStroke,
        withHeaderLeft,
        withHeaderRight,
        headerRightOptions,
        pointerEvents,
    } = getHeaderOptions({ headerGlobalSearchParams });

    const containerStyle = resolveHeaderContainerStyle(transparentBackground, withBottomStroke);

    return (
        <View style={[styles.container, containerStyle, {
            pointerEvents,
        }]}>
            <View style={styles.headerLeftAndTitleContainer}>
                {withHeaderLeft && <HeaderLeft />}
                <Text
                    style={styles.title}
                    numberOfLines={1}
                >
                    {title}
                </Text>
            </View>

            {withHeaderRight && (
                <HeaderRight
                    {...headerRightOptions}
                    secondAction={<Icon name="Feather" icon="cast" />}
                    tertiaryAction={<Icon name="Feather" icon="search" />}
                    fnTertiaryAction={() => router.push('/search')}
                />
            )}
        </View>
    );
});
