import {
    Image,
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { MovieListItemProps } from './types';
import { BorderRadius } from '@/src/constants/BorderRadius';
import { formatArrayToString } from '@/src/helpers/formatArraytoString';

export function MovieListItem(props: MovieListItemProps) {

    const {
        title,
        thumbnail,
        borderRadius = 'small',
        withBorderBottom = true,
        cast,
        genre,
    } = props;

    const borderRadiusMap = {
        none: BorderRadius.none,
        large: BorderRadius.xl,
        medium: BorderRadius.md,
        small: BorderRadius.sm,
    };

    const radius = borderRadiusMap[borderRadius];
    const borderBottomWidth = withBorderBottom ? 1 : 0;

    return (
        <View style={[styles.movieItemRow, {
            borderBottomWidth,
        }]}>
            <Image
                style={[styles.image, {
                    borderRadius: radius,
                }]}
                src={thumbnail}
            />

            <View
                style={styles.content}
            >
                <Text
                    style={styles.title}
                    numberOfLines={1}
                >
                    {title}
                </Text>

                <Text
                    style={styles.cast}
                    numberOfLines={2}
                >
                    Elenco: <Text>
                        {formatArrayToString(cast.map((cast) => {
                            return cast.name;
                        }))}
                    </Text>
                </Text>

                <Text
                    style={styles.genre}
                    numberOfLines={2}
                >
                    {formatArrayToString(genre.map((genre) => {
                        return genre;
                    }))}
                </Text>
            </View>
        </View>
    );
}

