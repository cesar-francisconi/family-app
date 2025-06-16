export interface ParsedSegment {
    type: 'mention' | 'text';
    text: string;
    punctuation?: string;
}

export const parseMessage = (message: string, answers: string[]): ParsedSegment[] => {
    return message.split(/(\s+)/).flatMap((segment): ParsedSegment[] => {
        if (segment.startsWith('@')) {
            const match = segment.match(/^(@(\w+))(\W*)$/); // captura @usuario e pontuação
            if (match) {
                const [, fullMention, username, punctuation] = match;
                if (answers.includes(username)) {
                    return [{ type: 'mention', text: fullMention, punctuation }];
                }
            }
        }

        // Se não for menção válida, trata como texto comum
        return [{ type: 'text', text: segment }]
    });
};
