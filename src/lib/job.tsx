import dayjs from 'dayjs';
import { FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import { useLanguage } from './i18n/context';
import { Subsection } from './subsection';

import './job.scss';

const capFirst = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export type CompanyProps = {
  name: string;
  url: string;
  logo: string;
};

export type JobProps = PropsWithChildren<{
  start: string;
  end: string;
  company: CompanyProps;
  title: ReactNode;
  languages: string[];
  databases: string[];
  frameworks: string[];
}>;

export const Job: FunctionComponent<JobProps> = ({
  start,
  end,
  company,
  title,
  languages,
  databases,
  frameworks,
  children,
}) => {
  const language = useLanguage();

  const startDate = dayjs(start, undefined, language);
  const endDate = dayjs(end, undefined, language);

  const tools = [
    languages.join(' \u2022 '),
    databases.join(' \u2022 '),
    frameworks.join(' \u2022 '),
  ].join(' \u2502 ');

  return (
    <Subsection
      className="job"
      title={`${capFirst(startDate.format('MMM YYYY'))} - ${capFirst(endDate.format('MMM YYYY'))}`}
    >
      <a className="job-logo" href={company.url} target="_blank" rel="noreferrer">
        <img src={company.logo} alt={company.name} />
      </a>
      <h5 className="job-company">
        <a href={company.url} target="_blank" rel="noreferrer">
          {company.name}
        </a>
      </h5>
      <h4 className="job-title">{title}</h4>
      <p className="job-tools">{tools}</p>
      {children}
    </Subsection>
  );
};
