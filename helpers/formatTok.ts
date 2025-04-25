export function formatToK(value: number): string {
    if (value < 1000) return value.toString();

    const formatted = (value / 1000).toFixed(1);
    return `${formatted}K`;
}