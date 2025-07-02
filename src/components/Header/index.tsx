import {
    Text,
    View,
} from 'react-native';
import {
    useGlobalSearchParams,
    useRouter,
} from 'expo-router';
import { styles } from './styles';
import { Colors } from '@/src/constants/Colors';
import { HeaderLeft } from '../HeaderLeft';
import { HeaderRight } from '../HeaderRight';
import { Icon } from '../Icon';
import { getHeaderOptions } from '@/src/helpers/getHeaderOptions';
import {
    HeaderGlobalSearchParams,
    HeaderProps
} from './types';

export const headerHeight = 80;

export function Header(props: HeaderProps) {

    const {

    } = props;

    const router = useRouter();
    const rawParams = useGlobalSearchParams<HeaderGlobalSearchParams>();

    const params = {
        ...rawParams,
        actorName: rawParams.actorName,
    };

    const {
        category,
        actorName,
        transparentBackground,
        withBottomStroke,
        withHeaderActions,
        withHeaderLeft,
        withHeaderRight,
        headerRightOptions,
        pointerEvents,
    } = getHeaderOptions({ params });

    const containerStyle = {
        height: headerHeight,
        backgroundColor: transparentBackground ? 'transparent' : Colors.surface.main,
        borderBottomWidth: withBottomStroke ? 1 : 0,
        pointerEvents,
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.headerLeftAndTitleContainer}>
                {withHeaderActions && withHeaderLeft && <HeaderLeft />}

                <Text style={styles.title}>
                    {category} {actorName && <Text>{actorName}</Text>}
                </Text>
            </View>

            {withHeaderActions && withHeaderRight && (
                <HeaderRight
                    {...headerRightOptions}
                    firstAction={<Icon name="Feather" icon="cast" />}
                    secondAction={<View>
                        <Icon name="Feather" icon="bell" />

                        <View
                            style={{
                                backgroundColor: 'red',
                                width: 18,
                                height: 18,
                                borderRadius: 999,
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: -10,
                                right: -5,
                            }}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 10,
                                }}
                            >
                                10
                            </Text>
                        </View>
                    </View>}
                    tertiaryAction={<Icon name="Feather" icon="search" />}
                    fnSecondAction={() => router.push('/search')}
                    fnTertiaryAction={() => router.push('/search')}
                />
            )}
        </View>
    );
}
