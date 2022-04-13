import './company.scss';

import { MessageType } from 'src/components/i18n/message';
import React from 'react';

export type CompanyProps = {
    name: MessageType;
    url: string;
    logo: string;
};

export class Company extends React.Component<CompanyProps> {
    render() {
        const { name, url, logo } = this.props;

        return (
            <h5 className="company">
                <a className="company-name" href={url} target="_blank">
                    <img className="company-logo" src={logo} />
                    <br />
                    {name}
                </a>
            </h5>
        );
    }
}
