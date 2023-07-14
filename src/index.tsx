import 'dayjs/locale/en';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { createRoot } from 'react-dom/client';
import { App } from './app/app';

dayjs.extend(duration);

const root = document.getElementById('root');

if (!root) {
  throw Error('Unable to find root element');
}

createRoot(root).render(<App />);
