import {
    StyleProp,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    ViewStyle,
} from 'react-native';
import { styles } from './styles';
import { OptionProps } from './types';
import { Colors } from '@/constants/Colors';

export function Option(props: OptionProps & Omit<TouchableOpacityProps, 'style'>) {

    const { text, leftIcon, rightIcon, showBottonStroke = false } = props;

    const containerBorderBottom: StyleProp<ViewStyle> = showBottonStroke ? {
        borderBottomWidth: 0.4,
        borderColor: Colors.outline.main,
    } :
        {
            borderBottomWidth: undefined,
            borderColor: undefined,
        };

    return (
        <View
            style={[styles.container, containerBorderBottom]}
        >
            <TouchableOpacity
                style={styles.button}
                {...props}
            >
                <View
                    style={styles.leftIconAndTextContainer}
                >
                    {leftIcon}

                    <Text
                        style={styles.text}
                    >
                        {text}
                    </Text>
                </View>

                {rightIcon}
            </TouchableOpacity>
        </View>
    );
}

