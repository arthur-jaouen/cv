import { FunctionComponent } from 'react';

import './company.scss';

export type CompanyProps = {
  name: string;
  url: string;
  logo: string;
};

export const Company: FunctionComponent<CompanyProps> = ({ name, url, logo }) => (
  <h5 className="company">
    <a className="company-name" href={url} target="_blank" rel="noreferrer">
      <>
        <img className="company-logo" src={logo} alt={name} />
        <br />
        {name}
      </>
    </a>
  </h5>
);
