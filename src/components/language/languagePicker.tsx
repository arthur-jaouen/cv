import React from 'react';

import { Icon } from 'src/components/icon';
import { LanguageConsumer } from 'src/components/language/languageContext';
import { Languages } from 'src/components/language/languages';

import './languagePicker.scss';

type LanguagePickerLinkProps = {
    language: Languages;
    name: string;
    icon: string;
    selectedLanguage: Languages;
    onSelect: (language: Languages) => void;
};

class LanguagePickerLink extends React.Component<LanguagePickerLinkProps> {
    onClick = (evt: React.MouseEvent) => {
        evt.preventDefault();
        this.props.onSelect(this.props.language);
    };

    render() {
        const { language, name, icon, selectedLanguage } = this.props;

        return (
            <a
                className={
                    'language-picker-link' + (selectedLanguage === language ? ' language-picker-link-selected' : '')
                }
                onClick={this.onClick}
                href="#"
            >
                <Icon name={icon} type="custom" />
                <br />
                {name}
            </a>
        );
    }
}

export class LanguagePicker extends React.Component {
    render() {
        return (
            <LanguageConsumer>
                {({ language, updateLanguage }) => (
                    <div className="language-picker">
                        <LanguagePickerLink
                            language="en"
                            name="En"
                            icon={require('public/img/en.svg')}
                            onSelect={updateLanguage}
                            selectedLanguage={language}
                        />
                        <LanguagePickerLink
                            language="fr"
                            name="Fr"
                            icon={require('public/img/fr.svg')}
                            onSelect={updateLanguage}
                            selectedLanguage={language}
                        />
                    </div>
                )}
            </LanguageConsumer>
        );
    }
}
