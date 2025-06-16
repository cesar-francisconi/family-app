import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { ChipProps } from './types';
import { BorderRadius } from '@/src/constants/BorderRadius';
import { Colors } from '@/src/constants/Colors';

export function Chip(props: ChipProps) {

    const {
        text,
        isActive = 'active',
        borderRadius = 'none',
        textTransform = 'capitalize',
    } = props;

    const borderRadiusMap = {
        large: BorderRadius['md'],
        medium: BorderRadius['sm'],
        small: BorderRadius['xs'],
        none: BorderRadius['none'],
    };

    const radius = borderRadiusMap[borderRadius];
    const backgroundColor = isActive ? Colors.surface.containerHigh : undefined;
    const color = isActive ? Colors.surface.on : Colors.surface.onVariant;

    return (
        <View
            style={[styles.container, {
                borderRadius: radius,
                backgroundColor,
            }]}
        >
            <Text
                numberOfLines={1}
                style={[styles.text, {
                    color,
                    textTransform,
                }]}
            >
                {text}
            </Text>
        </View>
    );
}

