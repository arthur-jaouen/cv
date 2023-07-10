import { FunctionComponent } from 'react';
import { LanguageProvider } from 'src/components/i18n/languageContext';
import { Layout } from 'src/layout/layout';

import './app.scss';

export const App: FunctionComponent = () => (
    <LanguageProvider>
        <Layout />
    </LanguageProvider>
);
