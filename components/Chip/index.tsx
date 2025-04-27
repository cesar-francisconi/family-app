import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { ChipProps } from './types';
import { BorderRadius } from '@/constants/BorderRadius';
import { Colors } from '@/constants/Colors';

export function Chip(props: ChipProps) {

    const { text, active = 'active', borderRadius = 'none' } = props;

    const borderRadiusMap = {
        large: BorderRadius['md'],
        medium: BorderRadius['sm'],
        small: BorderRadius['xs'],
        none: BorderRadius['none'],
    };

    const chipBorderRadius = borderRadiusMap[borderRadius];
    const chipBackgroundColor = active ? Colors.surface.containerHigh : undefined;
    const textColor = active ? Colors.surface.on : Colors.surface.onVariant;

    return (
        <View style={[styles.container, {
            borderRadius: chipBorderRadius,
            backgroundColor: chipBackgroundColor,
        }]}>
            <Text
                style={[styles.text, {
                    color: textColor,
                }]}
            >
                {text}
            </Text>
        </View>
    );
}

