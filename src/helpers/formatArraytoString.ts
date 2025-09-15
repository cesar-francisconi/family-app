export function formatArrayToString(value: string[]): string {
    const capitalize = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1);

    if (Array.isArray(value)) {
        return value.map(capitalize).join(', ');
    }

    return capitalize(value);
};