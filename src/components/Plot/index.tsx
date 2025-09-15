import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { PlotProps } from './types';
import { Button } from '../Button';
import { useIcon } from '@/src/hook/useIcon';

export const Plot = React.memo((props: PlotProps) => {

    const {
        title = 'Title',
        withTitle = false,
        description = 'Lorem ipsum dolor sit amet consectetur. Pulvinar in pellentesque eu ridiculus tellus aliquam tempor nulla. Ac dui scelerisque enim eu sem fringilla facilisi faucibus dictumst. Est lacus bibendum vitae id. Sagittis ultrices in nunc scelerisque elementum diam diam. Lorem ipsum dolor sit amet consectetur. Pulvinar in pellentesque eu ridiculus tellus aliquam tempor nulla. Ac dui scelerisque enim eu sem fringilla facilisi faucibus dictumst. Est lacus bibendum vitae id. Sagittis ultrices in nunc scelerisque elementum diam diam. Lorem ipsum dolor sit amet consectetur. Pulvinar in pellentesque eu ridiculus tellus aliquam tempor nulla. Ac dui scelerisque enim eu sem fringilla facilisi faucibus dictumst. Est lacus bibendum vitae id. Sagittis ultrices in nunc scelerisque elementum diam diam.',
        withButton = false,
        buttonOptions = { title: 'Button Title' },
        descriptionNumberOfLines = 3,
        fullPlot = false,
    } = props;

    const numberOfLines = fullPlot ? undefined : descriptionNumberOfLines;

    return (
        <View style={styles.container}>
            {withTitle && <Text
                numberOfLines={1}
                style={styles.title}
            >
                {title}
            </Text>}

            <Text
                numberOfLines={numberOfLines}
                style={styles.description}
            >
                {description}
            </Text>

            {withButton && < Button
                onPress={buttonOptions.onPress}
                type='primary'
                variant='text'
                size='medium'
                title={buttonOptions.title}
                rightIcon={useIcon({ name: 'Entypo', icon: 'chevron-thin-down' })}
            />}
        </View>
    );
});

