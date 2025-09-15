import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '../Icon';
import { styles } from './styles';
import { useBackNavigation } from '@/src/hook/useBackNavigation';
import { ActionDefaultOpacity } from '@/src/constants/Opacity';

export const HeaderLeft = React.memo(() => {

    const { resolveBackNavigation } = useBackNavigation();

    return (
        <TouchableOpacity activeOpacity={ActionDefaultOpacity} style={styles.container} onPress={resolveBackNavigation}>
            <Icon name="Entypo" icon="chevron-thin-left" size="medium" />
        </TouchableOpacity>
    );
});
