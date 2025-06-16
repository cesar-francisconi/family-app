export function formatDuration(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    let formattedDuration = '';
    if (hours > 0) formattedDuration += `${hours}h`;
    if (remainingMinutes > 0) formattedDuration += `${remainingMinutes}m`;

    return formattedDuration;
}