import { FunctionComponent, useContext } from 'react';
import { IconType } from 'react-icons';
import { FlagFrance } from '../icons/flagFrance';
import { FlagIreland } from '../icons/flagIreland';
import { FlagSpain } from '../icons/flagSpain';
import { Icon } from '../icons/icon';
import { LanguageContext } from './context';
import { Language } from './language';

import './picker.scss';

type PickerLinkProps = {
  language: Language;
  name: string;
  icon: IconType;
};

const PickerLink: FunctionComponent<PickerLinkProps> = ({ language, name, icon }) => {
  const [selectedLanguage, setLanguage] = useContext(LanguageContext);

  // TODO pick language when URL changes

  return (
    <a
      className={`language-picker-link${
        selectedLanguage === language ? ' language-picker-link-selected' : ''
      }`}
      onClick={(evt) => {
        evt.preventDefault();
        setLanguage(language);
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
    <PickerLink language="en" name="En" icon={FlagIreland} />
    <PickerLink language="fr" name="Fr" icon={FlagFrance} />
    <PickerLink language="es" name="Es" icon={FlagSpain} />
  </div>
);
