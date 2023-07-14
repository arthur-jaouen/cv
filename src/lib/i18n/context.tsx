import dayjs from 'dayjs';
import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getBrowserLanguage, Language } from './language';

export const LanguageContext = createContext<Language>(getBrowserLanguage());

export function useLanguage(): Language {
  return useContext(LanguageContext);
}

export const LanguageProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState(getBrowserLanguage());

  useEffect(() => {
    function hashChanged() {
      const language = getBrowserLanguage();
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
