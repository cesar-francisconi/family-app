export function extractUserTags(text: string) {
    const result = text.match(/@\w+/g);

    return result;
}

