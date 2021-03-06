import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'src/app';

import 'moment/locale/en-ie';
import 'moment/locale/fr';

moment.locale('en');

ReactDOM.render(<App />, document.getElementById('root'));

if ((module as any).hot) {
    (module as any).hot.accept('./app', () => ReactDOM.render(<App />, document.getElementById('root')));
}
