import {
    View,
} from 'react-native';
import { styles } from './styles';
import { ActionButtonsProps } from './types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import {
    addToLikedMovies,
    addToMyList,
    isMovieLiked,
    isMovieInMyList,
    removeFromLikedMovies,
    removeFromMyList,
} from '@/src/hook/useUser';
import {
    useCallback,
    useRef,
} from 'react';
import {
    useFocusEffect,
} from 'expo-router';
import { toggleItemStatus } from '@/src/helpers/toggleItemStatus';
import LottieView from 'lottie-react-native';

export function ActionButtons(props: ActionButtonsProps) {

    const {
        id,
    } = props;

    const animationLikeRef = useRef<LottieView>(null);
    const animationMyListRef = useRef<LottieView>(null);

    useFocusEffect(
        useCallback(() => {
            const loadMovieStatus = () => {
                const liked = isMovieLiked(id);
                const inList = isMovieInMyList(id);

                if (liked) {
                    animationLikeRef.current?.play(130, 130);
                } else {
                    animationLikeRef.current?.play(0, 0);
                };

                if (inList) {
                    animationMyListRef.current?.play(15, 15);
                } else {
                    animationMyListRef.current?.play(0, 0);
                };
            };

            loadMovieStatus();
        }, [id])
    );

    const toggleLikeMovie = () => {
        toggleItemStatus({
            id,
            checkFn: isMovieLiked,
            addFn: addToLikedMovies,
            removeFn: removeFromLikedMovies,
        });

        isMovieLiked(id) ? animationLikeRef.current?.play(30, 130) : animationLikeRef.current?.play(0, 0);
    };

    const toggleMyList = () => {
        toggleItemStatus({
            id,
            checkFn: isMovieInMyList,
            addFn: addToMyList,
            removeFn: removeFromMyList,
        });

        isMovieInMyList(id) ? animationMyListRef.current?.play(0, 15) : animationMyListRef.current?.play(0, 0);
    };

    return (
        <View style={styles.container}>
            <Button
                onPress={toggleLikeMovie}
                title='Avaliar'
                type='tertiary'
                variant='filled'
                size='small'
                borderRadius='large'
                leftIcon={
                    <LottieView
                        resizeMode='cover'
                        ref={animationLikeRef}
                        autoPlay={false}
                        loop={false}
                        style={styles.likeLottie}
                        source={require('../../assets/like.json')}
                    />
                }
            />

            <Button
                onPress={() => { }}
                title='Compartilhar'
                type='tertiary'
                variant='filled'
                size='small'
                borderRadius='large'
                leftIcon={
                    <Icon
                        name='Feather'
                        icon='share-2'
                        size='extraSmall'
                    />
                }
            />

            <Button
                onPress={toggleMyList}
                title='Minha lista'
                type='tertiary'
                variant='filled'
                size='small'
                borderRadius='large'
                leftIcon={
                    <LottieView
                        resizeMode='contain'
                        ref={animationMyListRef}
                        autoPlay={false}
                        loop={false}
                        style={styles.myListLottie}
                        source={require('../../assets/myList.json')}
                    />
                }
            />
        </View>
    );
}

