import React from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import {
    MovieCardProps,
} from './types';
import { styles } from './styles';
import { Colors } from '@/src/constants/Colors';
import { Icon } from '../Icon';
import { resolveMovieCardBorderRadius } from '@/src/helpers/resolveMovieCardBorderRadius';

export const MovieCard = React.memo((props: MovieCardProps) => {

    const {
        title = 'Title',
        withTitle = true,
        thumbnail,
        borderRadius = 'medium',
        withMore = false,
    } = props;

    const radius = resolveMovieCardBorderRadius(borderRadius);

    return (
        <View
            style={styles.container}
        >
            {withMore ? (<View
                style={[styles.moreContainer, {
                    borderRadius: radius,
                }]}
            >
                <Text
                    style={styles.moreText}
                >
                    Ver mais
                </Text>

                <Icon
                    name='Feather'
                    icon='eye'
                    color={Colors.primary.main}
                />
            </View>)
                :
                (<Image
                    style={[styles.image, {
                        borderRadius: radius,
                    }]}
                    src={thumbnail}
                />)}

            {withTitle && !withMore && <Text
                style={styles.title}
                numberOfLines={1}
            >
                {title}
            </Text>}
        </View>
    );
});

