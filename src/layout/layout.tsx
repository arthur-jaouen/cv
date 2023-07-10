import { FunctionComponent } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { LanguagePicker } from 'src/components/i18n/languagePicker';
import { Message } from 'src/components/i18n/message';
import { Icon } from 'src/components/icons/icon';
import { Portrait } from 'src/components/portrait';
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
                <div className="pdf-download">
                    <Message
                        msg={{
                            en: (
                                <a href="CV Arthur JAOUEN.pdf" target="_blank">
                                    <Icon icon={FaFileDownload} /> PDF
                                </a>
                            ),
                            fr: (
                                <a href="CV Arthur JAOUEN.pdf" target="_blank">
                                    <Icon icon={FaFileDownload} /> PDF
                                </a>
                            ),
                        }}
                    />
                </div>
                <LanguagePicker />
                <Portrait
                    image={require('assets/img/portrait.jpg')}
                    name="Arthur JAOUEN"
                    title={{ en: 'Full Stack Developer', fr: 'Développeur Fullstack' }}
                />
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
                <div className="education-container">
                    <Education />
                </div>
                <div className="skills-container">
                    <Skills />
                </div>
            </div>
        </aside>
    </div>
);
