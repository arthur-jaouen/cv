import dayjs from 'dayjs';
import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Language, languageFromString } from './language';

export const LanguageContext = createContext<Language>(
  languageFromString(window.navigator.language),
);

export function useLanguage(): Language {
  return useContext(LanguageContext);
}

export const LanguageProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState(languageFromString(window.navigator.language));

  useEffect(() => {
    function hashChanged() {
      const language = languageFromString(window.location.hash.substring(1));
      dayjs.locale(language);
      setLanguage(language);
    }

    window.addEventListener('hashchange', hashChanged);

    return () => {
      window.removeEventListener('hashchange', hashChanged);
    };
  }, []);

  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
};
