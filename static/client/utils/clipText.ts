const DEFAULT_MAX_LENGTH = 15;

export default function clipText(text: string, maxLength: number = DEFAULT_MAX_LENGTH) {
    return `${text.slice(0, maxLength)}...`;
}
