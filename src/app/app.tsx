import { FunctionComponent } from 'react';
import { LanguageProvider } from '../lib/i18n/context';
import { Layout } from './layout';

import './app.scss';

export const App: FunctionComponent = () => (
  <LanguageProvider>
    <Layout />
  </LanguageProvider>
);
