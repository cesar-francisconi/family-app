import React from 'react';
import {
    TouchableOpacity,
    View,
} from 'react-native';
import { HeaderRightProps } from './types';
import { styles } from './styles';
import { IconProps } from '../Icon/types';
import { ActionDefaultOpacity } from '@/src/constants/Opacity';

export const HeaderRight = React.memo((props: HeaderRightProps) => {

    const {
        withFirstAction,
        withSecondAction,
        withTertiaryAction,
        firstAction,
        secondAction,
        tertiaryAction,
        fnfirstAction,
        fnSecondAction,
        fnTertiaryAction
    } = props;

    return (
        <View
            style={styles.container}
        >
            {withFirstAction && <TouchableOpacity
                style={styles.actions}
                activeOpacity={ActionDefaultOpacity}
                onPress={fnfirstAction}
            >
                {firstAction && React.cloneElement(firstAction, { size: 'medium' } as IconProps)}
            </TouchableOpacity>}

            {withSecondAction && <TouchableOpacity
                style={styles.actions}
                activeOpacity={ActionDefaultOpacity}
                onPress={fnSecondAction}
            >
                {secondAction && React.cloneElement(secondAction, { size: 'medium' } as IconProps)}
            </TouchableOpacity>}

            {withTertiaryAction && <TouchableOpacity
                style={styles.actions}
                activeOpacity={ActionDefaultOpacity}
                onPress={fnTertiaryAction}
            >
                {tertiaryAction && React.cloneElement(tertiaryAction, { size: 'medium' } as IconProps)}
            </TouchableOpacity>}
        </View>

    );
});
