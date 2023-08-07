import 'dayjs/locale/en';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';

import dayjs from 'dayjs';
import { createRoot } from 'react-dom/client';
import { App } from './app/app';
import { getBrowserLanguage } from './lib/i18n/language';

dayjs.locale(getBrowserLanguage());

const root = document.getElementById('root');

if (!root) {
  throw Error('Unable to find root element');
}

createRoot(root).render(<App />);
