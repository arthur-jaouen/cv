import 'dayjs/locale/en';
import 'dayjs/locale/fr';

import { App } from 'src/app';
import React from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

ReactDOM.render(<App />, document.getElementById('root'));

if ((module as any).hot) {
    (module as any).hot.accept('./app', () => ReactDOM.render(<App />, document.getElementById('root')));
}
