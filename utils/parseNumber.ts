export default function parseNumber(string: string) {
    const parsed = parseFloat(string);
    if (Number.isNaN(parsed)) {
        return (0);
    }
    return parsed;
}
