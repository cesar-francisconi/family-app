import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Toast, {
  BaseToastProps,
} from "react-native-toast-message"
import { getScreenHeight } from "./getScreenHeight";
import { Spacing } from "../constants/Spacing";
import { Colors } from "../constants/Colors";
import { Font } from "../constants/Font";
import { BorderRadius } from "../constants/BorderRadius";

export const toastConfig = {
  customSuccessBase: ({ text2 }: BaseToastProps) => (
    <Pressable
      style={styles.toastMainContainer}
      onPress={() => Toast.hide()}
    >
      <View style={[styles.toastContainer, styles.successContainer]}>
        <Text style={[styles.message, {
          marginBottom: 0,
        }]}>{text2}</Text>
      </View>
    </Pressable>
  ),

  customSuccess: ({ text1, text2 }: BaseToastProps) => (
    <Pressable
      style={styles.toastMainContainer}
      onPress={() => Toast.hide()}
    >
      <View style={[styles.toastContainer, styles.successContainer]}>
        <Text style={styles.title}>{text1}</Text>
        <Text style={styles.message}>{text2}</Text>
        <Pressable
          onPress={() => Toast.hide()}
          style={[styles.button, styles.successButton]}
        >
          <Text style={styles.buttonText}>OK</Text>
        </Pressable>
      </View>
    </Pressable>
  ),

  customInfo: ({ text1, text2 }: BaseToastProps) => (
    <Pressable
      style={styles.toastMainContainer}
      onPress={() => Toast.hide()}
    >
      <View style={[styles.toastContainer, styles.infoContainer]}>
        <Text style={styles.title}>{text1}</Text>
        <Text style={styles.message}>{text2}</Text>
        <Pressable
          onPress={() => Toast.hide()}
          style={[styles.button, styles.infoButton]}
        >
          <Text style={styles.buttonText}>OK</Text>
        </Pressable>
      </View>
    </Pressable>
  ),


  customError: ({ text1, text2 }: BaseToastProps) => (
    <Pressable
      style={styles.toastMainContainer}
      onPress={() => Toast.hide()}
    >
      <View style={[styles.toastContainer, styles.errorContainer]}>
        <Text style={styles.title}>{text1}</Text>
        <Text style={styles.message}>{text2}</Text>
        <Pressable
          onPress={() => Toast.hide()}
          style={[styles.button, styles.errorButton]}
        >
          <Text style={styles.buttonText}>OK</Text>
        </Pressable>
      </View>
    </Pressable>
  ),
};

const styles = StyleSheet.create({
  successContainer: {
    borderLeftColor: Colors.success.main,
  },
  successButton: {
    backgroundColor: Colors.success.main,
  },
  infoContainer: {
    borderLeftColor: Colors.link,
  },
  infoButton: {
    backgroundColor: Colors.link,
  },
  errorContainer: {
    borderLeftColor: Colors.error.main,
  },
  errorButton: {
    backgroundColor: Colors.error.main,
  },
  toastMainContainer: {
    width: '100%',
    height: getScreenHeight,
    paddingHorizontal: Spacing['2xl'],
    backgroundColor: Colors.surface.transparentMain40,
  },
  toastContainer: {
    backgroundColor: Colors.inverseSurface.main,
    padding: Spacing['2xl'],
    borderLeftColor: Colors.success.main,
    borderLeftWidth: 8,
    borderRadius: BorderRadius['sm'],
  },
  title: {
    color: Colors.inverseSurface.on,
    ...StyleSheet.flatten(Font.title.medium),
    marginBottom: Spacing['sm'],
  },
  message: {
    color: Colors.inverseSurface.on,
    ...StyleSheet.flatten(Font.body.medium),
    marginBottom: Spacing['lg'],
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.success.main,
    paddingHorizontal: Spacing['2xl'],
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: BorderRadius['sm'],
  },
  buttonText: {
    color: Colors.success.on,
    ...StyleSheet.flatten(Font.label.large),
  },
});
