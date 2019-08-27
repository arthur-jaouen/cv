import React from 'react';

import { LanguagePicker } from 'src/components/language/languagePicker';
import { Portrait } from 'src/components/portrait';

export class Header extends React.Component<{}> {
    render() {
        return (
            <div className="header">
                <LanguagePicker />
                <Portrait
                    imageUrl={require('public/img/portrait.jpg')}
                    name="Arthur JAOUEN"
                    title={{ en: 'Web & apps developer', fr: 'Développeur web & applications' }}
                />
            </div>
        );
    }
}
