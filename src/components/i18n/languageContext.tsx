import React from 'react';

import { Languages } from 'src/components/i18n/languages';

export type LanguageContextProps = {
    language: Languages;
    updateLanguage: (language: Languages) => void;
};

export const LanguageContext = React.createContext<LanguageContextProps>({
    language: 'en',
    updateLanguage: language => {}
});

export const LanguageConsumer = LanguageContext.Consumer;
