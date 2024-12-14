// Converts FormData to an object
export function formDataToObject(formData: FormData): Record<string, any> {
    return Object.fromEntries(formData.entries());
}

// Returns a fallback image if the provided src is not a valid URL
export function fallbackImage(src: string): string {
    if (!src || !src.toLowerCase().startsWith('http')) return '../../assets/images/Rccg_logo.png';
    return src;
}

// Capitalizes the first letter of a string
export function capitalizeFirst(s: string): string {
    return s.split('').map((v, i) => (i === 0 ? v.toUpperCase() : v)).join('');
}

// Formats a number with commas as thousand separators, optionally as currency
export function formatNumber(num: number | string, asMoney = false): string {
    const _num = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    if (asMoney) return `£${_num}`;
    return _num;
}

// Checks if a URL points to a video file
export function isVideo(url: string): boolean {
    return ['mp4', 'm4a', 'webm'].includes(url.toLowerCase().split('.').pop() || '');
}

// Splits a string into nested arrays of characters with their original indices
export function splitStringToNestedArrays(input: string): { v: string; i: number }[][] {
    let result: { v: string; i: number }[][] = [];
    let index = 0;

    const words = input.split(' ');

    for (const word of words) {
        let wordArray: { v: string; i: number }[] = [];
        for (const char of word) {
            wordArray.push({ v: char, i: index });
            index++;
        }
        result.push(wordArray);
        index++;
    }

    return result;
}

// Builds a URL query string from an object
export function buildUrlQuery(obj: Record<string, any>): string {
    if (!obj) return '';
    return "?" + Object.entries(obj).map(([key, value]) => `${key}=${value ?? ''}`).join('&');
}

// Trims a FormData object to only include specified keys
export function trimFormData(formData: FormData, p2: string | string[]): FormData {
    const trimmedData = new FormData();
    const keysToKeep = Array.isArray(p2) ? p2 : [p2];

    formData.forEach((value, key) => {
        if (keysToKeep.includes(key)) {
            trimmedData.append(key, value);
        }
    });

    return trimmedData;
}

// Adds an "All" option to a list of options
interface Option {
    title: string;
    value: string;
}

export function withAll(list: Option[], title = ''): Option[] {
    return [{ title: `All ${title}`, value: '' }, ...list];
}