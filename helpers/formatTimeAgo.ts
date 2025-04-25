export function formatTimeAgo(seconds: number): string {
    const minute = 60;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 12 * month;

    if (seconds < minute) {
        const s = Math.floor(seconds);
        return `há ${s} segundo${s !== 1 ? 's' : ''}`;
    }

    if (seconds < hour) {
        const m = Math.floor(seconds / minute);
        return `há ${m} minuto${m !== 1 ? 's' : ''}`;
    }

    if (seconds < day) {
        const h = Math.floor(seconds / hour);
        return `há ${h} hora${h !== 1 ? 's' : ''}`;
    }

    if (seconds < month) {
        const d = Math.floor(seconds / day);
        return `há ${d} dia${d !== 1 ? 's' : ''}`;
    }

    if (seconds < year) {
        const mo = Math.floor(seconds / month);
        return `há ${mo} mês${mo !== 1 ? 'es' : ''}`;
    }

    const y = Math.floor(seconds / year);
    return `há ${y} ano${y !== 1 ? 's' : ''}`;
}