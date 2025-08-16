import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Icon } from '../Icon';
import { styles } from './styles';
import {
    AppRoutes,
    usePathName,
} from '@/src/hook/usePathname';

export function HeaderLeft() {

    const router = useRouter();
    const pathname = usePathName();
    
    const handleBack = () => {
        const backTimes: Partial<Record<AppRoutes, number>> = {
            '/more': 2,
            '/comments': 2,
            '/answers': 3,
        };

        const times = backTimes[pathname] ?? 1;

        for (let i = 0; i < times; i++) {
            router.back();
        };
    };

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={handleBack}>
            <Icon name="Entypo" icon="chevron-thin-left" size="medium" />
        </TouchableOpacity>
    );
}
