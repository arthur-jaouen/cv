import { FunctionComponent, useContext } from 'react';
import { IconType } from 'react-icons';
import { Language, LanguageContext } from 'src/components/i18n/languageContext';
import { FlagFrance } from 'src/components/icons/flagFrance';
import { FlagIreland } from 'src/components/icons/flagIreland';
import { Icon } from 'src/components/icons/icon';

import './languagePicker.scss';

type LanguagePickerLinkProps = {
    language: Language;
    name: string;
    icon: IconType;
};

const LanguagePickerLink: FunctionComponent<LanguagePickerLinkProps> = ({ language, name, icon }) => {
    const [selectedLanguage, updateLanguage] = useContext(LanguageContext);

    return (
        <a
            className={`language-picker-link${selectedLanguage === language ? ' language-picker-link-selected' : ''}`}
            onClick={(evt) => {
                evt.preventDefault();
                updateLanguage(language);
            }}
            href={`#${language}`}
        >
            <Icon icon={icon} />
            {name}
        </a>
    );
};

export const LanguagePicker: FunctionComponent = () => (
    <div className="language-picker">
        <LanguagePickerLink language="en" name="En" icon={FlagIreland} />
        <LanguagePickerLink language="fr" name="Fr" icon={FlagFrance} />
    </div>
);
