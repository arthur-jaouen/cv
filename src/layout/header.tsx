import React from 'react';

import { LanguagePicker } from 'src/components/i18n/languagePicker';
import { Portrait } from 'src/components/portrait';

export class Header extends React.Component<{}> {
    render() {
        return (
            <div className="header">
                <LanguagePicker />
                <Portrait
                    image={require('public/img/portrait.jpg')}
                    name="Arthur JAOUEN"
                    title={{ en: 'Full Stack Developer', fr: 'Développeur Fullstack' }}
                />
            </div>
        );
    }
}
