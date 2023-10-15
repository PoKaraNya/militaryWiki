export function chunk<T>(arr: T[], size: number): T[][] {
    if (!Array.isArray(arr) || size <= 0) {
        return [];
    }
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}