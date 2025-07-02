export function getInitialsFromUsername(username: string): string {
    if (!username) return '';

    let cleanName = username.startsWith('@') ? username.slice(1) : username;

    cleanName = cleanName
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z]/g, '')

    if (cleanName.length === 0) return '';

    // Se só tiver uma letra
    if (cleanName.length === 1) {
        return cleanName[0].toUpperCase();
    }

    // Retorna as duas primeiras letras
    return cleanName.slice(0, 1).toUpperCase();
}
