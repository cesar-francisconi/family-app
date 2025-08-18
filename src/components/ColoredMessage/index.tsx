import { ColoredMessageProps } from "./types";
import { styles } from "./styles";
import { Colors } from "@/src/constants/Colors";
import ParsedText from 'react-native-parsed-text';

export function ColoredMessage(props: ColoredMessageProps) {

    const { message } = props;

    if (!message) return null;

    return (
        <ParsedText
            style={styles.text}
            numberOfLines={4}
            parse={[
                {
                    pattern: /@\w+/,
                    style: { color: Colors.link },
                    onPress: (username) => {
                        console.log("Mencionado:", username);
                    },
                },
            ]}
        >
            {message}
        </ParsedText>
    );
};