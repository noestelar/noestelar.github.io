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
    // Ensure path doesn't start with / if we are appending it,
    // OR handle the leading slash correctly.
    // If path is "/" and lang is default, return "/"
    // If path is "/" and lang is not default, return "/es/" or "/es"

    let cleanPath = path;
    if (cleanPath.startsWith('/')) {
        cleanPath = cleanPath.substring(1);
    }

    if (lang === defaultLang) {
        return `/${cleanPath}`;
    }
    return `/${lang}/${cleanPath}`;
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return getRelativeLocaleUrl(l, path);
  }
}
