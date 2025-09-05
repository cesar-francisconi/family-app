export function hasDuplicateTitles(titles: string[]): boolean {
    const normalized = titles.map(title => title.toLowerCase().trim());
    return new Set(normalized).size !== normalized.length;
};