import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  BaseToastProps,
} from "react-native-toast-message"
import { Spacing } from "../constants/Spacing";
import { Colors } from "../constants/Colors";
import { Font } from "../constants/Font";
import { BorderRadius } from "../constants/BorderRadius";

export const toastConfig = {
  customSuccess: ({ text1, text2 }: BaseToastProps) => (
    <View
      style={styles.toastMainContainer}
    >
      <View style={[styles.toastContainer, styles.successContainer]}>
        {text1 && <Text style={styles.title}>{text1}</Text>}
        {text2 && <Text style={styles.message}>{text2}</Text>}
      </View>
    </View>
  ),

  customInfo: ({ text1, text2 }: BaseToastProps) => (
    <View
      style={styles.toastMainContainer}
    >
      <View style={[styles.toastContainer, styles.infoContainer]}>
        {text1 && <Text style={styles.title}>{text1}</Text>}
        {text2 && <Text style={styles.message}>{text2}</Text>}
      </View>
    </View>
  ),


  customError: ({ text1, text2 }: BaseToastProps) => (
    <View
      style={styles.toastMainContainer}
    >
      <View style={[styles.toastContainer, styles.errorContainer]}>
        {text1 && <Text style={styles.title}>{text1}</Text>}
        {text2 && <Text style={styles.message}>{text2}</Text>}
      </View>
    </View>
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
