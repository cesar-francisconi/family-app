import {
    TouchableOpacity,
    View,
} from 'react-native';
import { HeaderRightProps } from './types';
import React from 'react';
import { styles } from './styles';
import { Spacing } from '@/src/constants/Spacing';
import { BorderRadius } from '@/src/constants/BorderRadius';
import { IconProps } from '../Icon/types';

export function HeaderRight(props: HeaderRightProps) {

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
                activeOpacity={0.7}
                onPress={fnfirstAction}
            >
                {firstAction && React.cloneElement(firstAction, { size: 'medium' } as IconProps)}
            </TouchableOpacity>}

            {withSecondAction && <TouchableOpacity
                style={styles.actions}
                activeOpacity={0.7}
                onPress={fnSecondAction}
            >
                {secondAction && React.cloneElement(secondAction, { size: 'medium' } as IconProps)}
            </TouchableOpacity>}

            {withTertiaryAction && <TouchableOpacity
                style={styles.actions}
                activeOpacity={0.7}
                onPress={fnTertiaryAction}
            >
                {tertiaryAction && React.cloneElement(tertiaryAction, { size: 'medium' } as IconProps)}
            </TouchableOpacity>}
        </View>

    );
}
