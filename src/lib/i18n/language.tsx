export type Language = 'fr' | 'en' | 'es';

export function languageFromString(lang: string): Language {
  return (['fr', 'en', 'es'].find((l) => lang.startsWith(l)) as Language) || 'en';
}

export function getBrowserLanguage(): Language {
  const hash = window.location.hash.substring(1);

  return languageFromString(hash.length > 0 ? hash : window.navigator.language);
}
