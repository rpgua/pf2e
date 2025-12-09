import { ui, defaultLang } from './ui';

export function useTranslations(lang: keyof typeof ui = defaultLang) {
    function t(key: string): string;
    function t(key: string, vars: Record<string, any>): string | any[];
    function t(key: string, vars: Record<string, any> = {}) {
        const text = (ui[lang] as Record<string, string>)[key] || (ui[defaultLang] as Record<string, string>)[key] || key;
        if (Object.keys(vars).length === 0) return text;
        const parts = text.split(/({[a-zA-Z0-9_]+})/g);
        return parts.map((part) => {
            const match = part.match(/^{([a-zA-Z0-9_]+)}$/);
            if (match) {
                const varName = match[1];
                return vars[varName] !== undefined ? vars[varName] : part;
            }
            return part;
        });
    }
    return t;
}