import { Colors } from '@/constants/Colors';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>
        Home
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary.main,
  },
});