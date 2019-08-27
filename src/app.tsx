import React from 'react';

import { LanguageProvider } from 'src/components/language/languageProvider';
import { Layout } from 'src/layout/layout';

import './app.scss';

export const App: React.FC = () => {
    return (
        <LanguageProvider>
            <Layout />
        </LanguageProvider>
    );
};
