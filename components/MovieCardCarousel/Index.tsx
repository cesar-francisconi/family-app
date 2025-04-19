import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { MovieCardCarouselProps } from './types';
import { styles } from './styles';
import { MovieCard } from '../MovieCard';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Colors } from '@/constants/Colors';

export function MovieCardCarousel(props: MovieCardCarouselProps) {

    const {
        category = 'Category',
        buttonTitle = 'See more',
        movieCards,
        showMovieCardTitle = false,
    } = props;

    const movieCardProps = {
        showTitle: showMovieCardTitle,
    };

    return (
        <View style={styles.mainContainer}>
            <View
                style={styles.headerContainer}
            >
                <Text
                    style={styles.title}
                >
                    {category}
                </Text>
                <Button
                    type='primary'
                    size='small'
                    variant='text'
                    title={buttonTitle}
                    iconRight={<Icon
                        name='Entypo'
                        icon='chevron-thin-right'
                        color={Colors.primary.main}
                        size='extraSmall'
                    />}
                    onPress={() => {

                    }}
                />
            </View>

            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                horizontal
                data={movieCards}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {

                            }}
                        >
                            <MovieCard
                                {...item}
                                {...movieCardProps}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

