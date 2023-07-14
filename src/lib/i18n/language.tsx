export type Language = 'fr' | 'en' | 'es';

export function languageFromString(lang: string): Language {
  return (['fr', 'en', 'es'].find((l) => lang.startsWith(l)) as Language) || 'en';
}
