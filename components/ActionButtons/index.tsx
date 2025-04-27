import {
    View,
} from 'react-native';
import { styles } from './styles';
import { ActionButtonsProps } from './types';
import { Button } from '../Button';
import { Icon } from '../Icon';

export function ActionButtons(props: ActionButtonsProps) {

    const { } = props;

    return (
        <View style={styles.container}>
            <Button
                onPress={() => { }}
                title='Avaliar'
                type='tertiary'
                variant='filled'
                size='small'
                borderRadius='large'
                leftIcon={
                    <Icon
                        name='AntDesign'
                        icon='like2'
                        size='extraSmall'
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
                onPress={() => { }}
                title='Minha lista'
                type='tertiary'
                variant='filled'
                size='small'
                borderRadius='large'
                leftIcon={
                    <Icon
                        name='AntDesign'
                        icon='plus'
                        size='extraSmall'
                    />
                }
            />
        </View>
    );
}

