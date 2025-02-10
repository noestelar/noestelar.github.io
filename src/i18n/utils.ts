import { ui } from './ui';

export const languages = {
  en: 'English',
  es: 'Español'
};

export const defaultLang = 'en';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: keyof typeof ui['en']) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRouteFromUrl(url: URL): string {
  return url.pathname.split('/').slice(2).join('/') || '';
}

export function getRelativeLocaleUrl(lang: keyof typeof languages, path: string) {
  const baseUrl = lang === defaultLang ? '' : `/${lang}`;
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function useTranslatedPath(lang: keyof typeof languages) {
  return function translatePath(path: string) {
    return getRelativeLocaleUrl(lang, path);
  }
}
