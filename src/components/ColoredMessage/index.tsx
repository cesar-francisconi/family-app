import { parseMessage } from "@/src/helpers/parseMessage";
import { getAnswerUsernamesByIds } from "@/src/hook/useMovie";
import React, {
    useEffect,
    useState,
} from "react";
import { Text } from "react-native";
import { ColoredMessageProps } from "./types";
import { styles } from "./styles";
import { Colors } from "@/src/constants/Colors";

export function ColoredMessage(props: ColoredMessageProps) {

    const {
        message
    } = props;

    const [answerUsernames, setAnswerUsernames] = useState<string[] | null>();

    useEffect(() => {
        (async () => {
            const answerUsernames = await getAnswerUsernamesByIds();

            setAnswerUsernames(answerUsernames);
        })();
    }, []);

    if (!answerUsernames) return;

    const segments = parseMessage(message, answerUsernames);

    return (
        <Text
            style={styles.text}
            numberOfLines={4}
        >
            {segments.map((segment, index) => {
                if (segment.type === 'mention') {
                    return (
                        <React.Fragment key={index}>
                            <Text
                                onPress={() => {

                                }}
                                style={{ color: Colors.link }}
                            >
                                {segment.text}
                            </Text>
                            {segment.punctuation && (
                                <Text key={`${index}-p`}>
                                    {segment.punctuation}
                                </Text>
                            )}
                        </React.Fragment>
                    );
                }

                return (
                    <Text key={index}>
                        {segment.text}
                    </Text>
                );
            })}
        </Text>
    );
};
