import { FunctionComponent } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { LanguagePicker } from '../lib/i18n/picker';
import { En, Fr } from '../lib/i18n/translate';
import { Icon } from '../lib/icons/icon';
import { Portrait } from '../lib/portrait';
import { Contact } from './contact';
import { Education } from './education';
import { Interests } from './interests';
import { Jobs } from './jobs';
import { Profile } from './profile';
import { Skills } from './skills';

import './layout.scss';

export const Layout: FunctionComponent = () => (
  <div className="layout-container">
    <header>
      <div className="sticky">
        <div className="pdf-download noprint">
          <En>
            <a href="CV Arthur JAOUEN en.pdf" target="_blank">
              <Icon icon={FaFileDownload} /> PDF
            </a>
          </En>
          <Fr>
            <a href="CV Arthur JAOUEN.pdf" target="_blank">
              <Icon icon={FaFileDownload} /> PDF
            </a>
          </Fr>
        </div>
        <LanguagePicker />
        <Portrait image={require('../img/portrait.jpg')} name="Arthur JAOUEN">
          <En>Software Engineer</En>
          <Fr>Ingénieur Logiciel</Fr>
        </Portrait>
        <Contact />
        <Profile />
        <Interests />
      </div>
    </header>
    <main>
      <Jobs />
    </main>
    <aside>
      <div className="sticky">
        <Education />
        <Skills />
      </div>
    </aside>
  </div>
);
