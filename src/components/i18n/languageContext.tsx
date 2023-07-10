import dayjs from 'dayjs';
import { createContext, FunctionComponent, useCallback, useContext, useMemo, useState } from 'react';

export type Language = 'fr' | 'en';

export type LanguageState = [language: Language, updateLanguage: (language: Language) => void];

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

export type LanguageProviderProps = {
    children?: React.ReactNode;
};

export const LanguageProvider: FunctionComponent<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const updateLanguage = useCallback((language: Language) => {
        dayjs.locale(language);
        setLanguage(language);
    }, []);

    const value = useMemo<LanguageState>(() => [language, updateLanguage], [language, updateLanguage]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
