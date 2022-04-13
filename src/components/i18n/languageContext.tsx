import React from 'react';

export type Languages = 'fr' | 'en';

export type LanguageContextProps = {
    language: Languages;
    updateLanguage: (language: Languages) => void;
};

export const LanguageContext = React.createContext<LanguageContextProps>({
    language: 'en',
    updateLanguage: (language) => {},
});

export const LanguageConsumer = LanguageContext.Consumer;
