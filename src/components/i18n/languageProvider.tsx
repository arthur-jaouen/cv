import { LanguageContext, Languages } from 'src/components/i18n/languageContext';

import React from 'react';
import dayjs from 'dayjs';

type LanguageProviderProps = {
    children?: React.ReactNode;
};

type LanguageProviderState = {
    language: Languages;
};

export class LanguageProvider extends React.Component<LanguageProviderProps, LanguageProviderState> {
    state: LanguageProviderState = {
        language: 'en',
    };

    updateLanguage = (language: Languages) => {
        dayjs.locale(language);
        this.setState({ language });
    };

    render() {
        const { children } = this.props;
        const language = this.state.language;

        return (
            <LanguageContext.Provider
                value={{
                    language,
                    updateLanguage: this.updateLanguage,
                }}
            >
                {children}
            </LanguageContext.Provider>
        );
    }
}
