import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { WelcomeProps } from './types';

export const Welcome = React.memo((props: WelcomeProps) => {

    const { title, description } = props;

    return (
        <View style={styles.container}>
            <Text
                style={styles.title}
            >
                {title}
            </Text>

            <Text
                style={styles.description}
            >
                {description}
            </Text>
        </View>
    );
});

