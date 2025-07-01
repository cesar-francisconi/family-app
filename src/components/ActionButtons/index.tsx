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
    useState,
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

    const isReadyToggleLikeMovie = useRef(true);
    const isReadyToggleMyList = useRef(true);

    const [isMovieLikedState, setIsMovieLikedState] = useState(false);
    const [isMovieInMyListState, setIsMovieInMyListState] = useState(false);

    useFocusEffect(
        useCallback(() => {
            const loadMovieStatus = async () => {
                const liked = await isMovieLiked(id);
                const inList = await isMovieInMyList(id);

                if (liked) {
                    animationLikeRef.current?.play(130, 130);

                    setIsMovieLikedState(true);
                } else {
                    animationLikeRef.current?.play(0, 0);

                    setIsMovieLikedState(false);
                };

                if (inList) {
                    animationMyListRef.current?.play(15, 15);

                    setIsMovieInMyListState(true);
                } else {
                    animationMyListRef.current?.play(0, 0);

                    setIsMovieInMyListState(false);
                };
            };

            loadMovieStatus();
        }, [id])
    );


    const toggleLikeMovie = async () => {
        if (isReadyToggleLikeMovie.current) {
            isReadyToggleLikeMovie.current = false;

            !isMovieLikedState ? animationLikeRef.current?.play(30, 130) : animationLikeRef.current?.play(0, 0);

            await toggleItemStatus({
                id,
                checkFn: isMovieLiked,
                addFn: addToLikedMovies,
                removeFn: removeFromLikedMovies,
            });

            const result = await isMovieLiked(id);
            setIsMovieLikedState(result);

            isReadyToggleLikeMovie.current = true;
        };
    };

    const toggleMyList = async () => {
        if (isReadyToggleMyList.current) {
            isReadyToggleMyList.current = false;

            !isMovieInMyListState ? animationMyListRef.current?.play(0, 15) : animationMyListRef.current?.play(0, 0);

            await toggleItemStatus({
                id,
                checkFn: isMovieInMyList,
                addFn: addToMyList,
                removeFn: removeFromMyList,
            });


            const result = await isMovieInMyList(id);
            setIsMovieInMyListState(result);

            isReadyToggleMyList.current = true;
        };
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

