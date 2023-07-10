import { FunctionComponent } from 'react';
import { messageStr, MessageStr } from 'src/components/i18n/message';
import { useLanguage } from './i18n/languageContext';

import './company.scss';

export type CompanyProps = {
    name: MessageStr;
    url: string;
    logo: string;
};

export const Company: FunctionComponent<CompanyProps> = ({ name, url, logo }) => (
    <h5 className="company">
        <a className="company-name" href={url} target="_blank" rel="noreferrer">
            <>
                <img className="company-logo" src={logo} alt={messageStr(name, useLanguage())} />
                <br />
                {name}
            </>
        </a>
    </h5>
);
