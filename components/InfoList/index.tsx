import {
    View,
} from 'react-native';
import { styles } from './styles';
import { InfoListProps } from './types';
import { Info } from '../Info';

export function InfoList(props: InfoListProps) {

    const { infos } = props;

    return (
        <View style={styles.container}>
            {infos.map((info) => {
                return (
                    <Info
                        key={info.id}
                        {...info}
                    />
                );
            })}
        </View>
    );
}
