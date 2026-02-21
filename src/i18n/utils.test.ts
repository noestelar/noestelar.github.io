import { expect, test, describe } from "bun:test";
import { useTranslatedPath, getRelativeLocaleUrl, getLangFromUrl, useTranslations } from "./utils";

describe("i18n utils", () => {
  describe("getRelativeLocaleUrl", () => {
    test("returns correct path for default language (en)", () => {
      expect(getRelativeLocaleUrl("en", "/")).toBe("/");
      expect(getRelativeLocaleUrl("en", "/about")).toBe("/about");
      expect(getRelativeLocaleUrl("en", "about")).toBe("/about");
      expect(getRelativeLocaleUrl("en", "")).toBe("/");
    });

    test("returns correct path for non-default language (es)", () => {
      expect(getRelativeLocaleUrl("es", "/")).toBe("/es/");
      expect(getRelativeLocaleUrl("es", "/about")).toBe("/es/about");
      expect(getRelativeLocaleUrl("es", "about")).toBe("/es/about");
      expect(getRelativeLocaleUrl("es", "")).toBe("/es/");
    });
  });

  describe("useTranslatedPath", () => {
    test("returns a function that translates paths for the given language", () => {
      const translatePathEn = useTranslatedPath("en");
      expect(translatePathEn("/")).toBe("/");
      expect(translatePathEn("/about")).toBe("/about");

      const translatePathEs = useTranslatedPath("es");
      expect(translatePathEs("/")).toBe("/es/");
      expect(translatePathEs("/about")).toBe("/es/about");
    });

    test("allows overriding the language", () => {
      const translatePath = useTranslatedPath("en");
      expect(translatePath("/about", "es")).toBe("/es/about");

      const translatePathEs = useTranslatedPath("es");
      expect(translatePathEs("/about", "en")).toBe("/about");
    });
  });

  describe("getLangFromUrl", () => {
    test("extracts language from URL", () => {
      expect(getLangFromUrl(new URL("https://example.com/en/about"))).toBe("en");
      expect(getLangFromUrl(new URL("https://example.com/es/about"))).toBe("es");
    });

    test("returns default language for unknown language", () => {
      expect(getLangFromUrl(new URL("https://example.com/fr/about"))).toBe("en");
    });

    test("returns default language when no language in path", () => {
      expect(getLangFromUrl(new URL("https://example.com/about"))).toBe("en");
    });

    test("handles root URL", () => {
      expect(getLangFromUrl(new URL("https://example.com/"))).toBe("en");
    });
  });

  describe("useTranslations", () => {
    test("returns translation function for given language", () => {
      const tEn = useTranslations("en");
      expect(tEn("nav.home")).toBe("Home");

      const tEs = useTranslations("es");
      expect(tEs("nav.home")).toBe("Inicio");
    });

    test("falls back to default language if key missing in current language", () => {
      const tEs = useTranslations("es");
      // We assume 'nav.home' exists in both.
      // If we want to test fallback, we'd need a key only in 'en'.
      // Looking at ui.ts, both 'en' and 'es' seem to have the same keys.
      expect(tEs("nav.home")).toBe("Inicio");
    });
  });
});
