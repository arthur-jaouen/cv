import './languagePicker.scss';

import { LanguageConsumer, Languages } from 'src/components/i18n/languageContext';

import { FlagFrance } from 'src/components/icons/flagFrance';
import { FlagIreland } from 'src/components/icons/flagIreland';
import { Icon } from 'src/components/icons/icon';
import { IconType } from 'react-icons';
import React from 'react';

type LanguagePickerLinkProps = {
    language: Languages;
    name: string;
    icon: IconType;
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
                className={`language-picker-link${
                    selectedLanguage === language ? ' language-picker-link-selected' : ''
                }`}
                onClick={this.onClick}
                href={`#${language}`}
            >
                <Icon icon={icon} />
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
                            icon={FlagIreland}
                            onSelect={updateLanguage}
                            selectedLanguage={language}
                        />
                        <LanguagePickerLink
                            language="fr"
                            name="Fr"
                            icon={FlagFrance}
                            onSelect={updateLanguage}
                            selectedLanguage={language}
                        />
                    </div>
                )}
            </LanguageConsumer>
        );
    }
}
