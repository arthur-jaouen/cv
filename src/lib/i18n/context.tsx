import dayjs from 'dayjs';
import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Language } from './language';

export type LanguageState = [language: Language, setLanguage: (language: Language) => void];

export const LanguageContext = createContext<LanguageState>([
  'en',
  () => {
    /* Nothing */
  },
]);

export function useLanguage(): Language {
  const [language] = useContext(LanguageContext);

  return language;
}

export const LanguageProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = useMemo<LanguageState>(
    () => [
      language,
      (language: Language) => {
        dayjs.locale(language);
        setLanguage(language);
      },
    ],
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
