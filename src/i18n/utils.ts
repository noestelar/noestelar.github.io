import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    // Check if the key exists in the current language
    // TypeScript might complain about key access if ui[lang] is not strictly typed to have all keys
    // But assuming ui structure is consistent:
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRelativeLocaleUrl(lang: string, path: string) {
    if (lang === defaultLang) {
        return `/${path}`;
    }
    return `/${lang}/${path}`;
}
