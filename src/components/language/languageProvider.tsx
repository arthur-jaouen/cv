import React from 'react';

import { LanguageContext } from 'src/components/language/languageContext';
import { Languages } from 'src/components/language/languages';

type LanguageProviderState = {
    language: Languages;
};

export class LanguageProvider extends React.Component<{}, LanguageProviderState> {
    state: LanguageProviderState = {
        language: 'en'
    };

    updateLanguage = (language: Languages) => {
        this.setState({ language });
    };

    render() {
        const { children } = this.props;
        const language = this.state.language;

        return (
            <LanguageContext.Provider
                value={{
                    language,
                    updateLanguage: this.updateLanguage
                }}
            >
                {children}
            </LanguageContext.Provider>
        );
    }
}
