import { FunctionComponent } from 'react';
import { IconType } from 'react-icons';
import { FlagFrance } from '../icons/flagFrance';
import { FlagIreland } from '../icons/flagIreland';
import { Icon } from '../icons/icon';
import { useLanguage } from './context';
import { Language } from './language';

import './picker.scss';

type PickerLinkProps = {
  language: Language;
  name: string;
  icon: IconType;
};

const PickerLink: FunctionComponent<PickerLinkProps> = ({ language, name, icon }) => {
  const selectedLanguage = useLanguage();

  return (
    <a
      className={`language-picker-link${
        selectedLanguage === language ? ' language-picker-link-selected' : ''
      }`}
      href={`#${language}`}
    >
      <Icon icon={icon} />
      {name}
    </a>
  );
};

export const LanguagePicker: FunctionComponent = () => (
  <div className="language-picker noprint">
    <PickerLink language="en" name="En" icon={FlagIreland} />
    <PickerLink language="fr" name="Fr" icon={FlagFrance} />
    {/* TODO <PickerLink language="es" name="Es" icon={FlagSpain} /> */}
  </div>
);
