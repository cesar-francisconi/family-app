import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { PlotProps } from './types';
import { Button } from '../Button';

export function Plot(props: PlotProps) {

    const {
        title = 'Film Title',
        showTitle = true,
        description = 'Lorem ipsum dolor sit amet consectetur. Pulvinar in pellentesque eu ridiculus tellus aliquam tempor nulla. Ac dui scelerisque enim eu sem fringilla facilisi faucibus dictumst. Est lacus bibendum vitae id. Sagittis ultrices in nunc scelerisque elementum diam diam. Lorem ipsum dolor sit amet consectetur. Pulvinar in pellentesque eu ridiculus tellus aliquam tempor nulla. Ac dui scelerisque enim eu sem fringilla facilisi faucibus dictumst. Est lacus bibendum vitae id. Sagittis ultrices in nunc scelerisque elementum diam diam. Lorem ipsum dolor sit amet consectetur. Pulvinar in pellentesque eu ridiculus tellus aliquam tempor nulla. Ac dui scelerisque enim eu sem fringilla facilisi faucibus dictumst. Est lacus bibendum vitae id. Sagittis ultrices in nunc scelerisque elementum diam diam.',
        fnMoreButton = () => { },
        moreButtonTitle = 'More',
        descriptionNumberOfLines = 3,
        fullPlot = false,
    } = props;

    const isDescriptionNumberOfLines = fullPlot ? 0 : descriptionNumberOfLines;

    return (
        <View style={styles.container}>
            {!fullPlot && showTitle && <Text
                numberOfLines={1}
                style={styles.title}
            >
                {title}
            </Text>}

            <Text
                numberOfLines={isDescriptionNumberOfLines}
                style={styles.description}
            >
                {description}
            </Text>

            {!fullPlot && <Button
                onPress={fnMoreButton}
                type='primary'
                variant='text'
                size='small'
                title={moreButtonTitle}
            />}
        </View>
    );
}

