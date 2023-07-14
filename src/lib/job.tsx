import dayjs from 'dayjs';
import { FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import { FaCircle } from 'react-icons/fa';
import { Company, CompanyProps } from './company';
import { Duration } from './i18n/duration';
import { Icon } from './icons/icon';
import { Subsection } from './subsection';

import { useLanguage } from './i18n/context';
import './job.scss';

export type JobProps = PropsWithChildren<{
  start: string;
  end: string;
  company?: CompanyProps;
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

  return (
    <div className="job">
      <div className="job-company">{company ? <Company {...company} /> : null}</div>
      <Subsection
        title={
          <>
            {startDate.format('MMM YYYY')} - {endDate.format('MMM YYYY')} (
            <Duration start={startDate} end={endDate} />)
          </>
        }
      >
        <h4 className="job-title">{title}</h4>
        <p className="job-tools">
          {languages.map((l) => (
            <span key={l} className="job-tool">
              {l}
            </span>
          ))}
          <Icon icon={FaCircle} color="#009a49" />
          {frameworks.map((f) => (
            <span key={f} className="job-tool">
              {f}
            </span>
          ))}
          <Icon icon={FaCircle} color="#009a49" />
          {databases.map((d) => (
            <span key={d} className="job-tool">
              {d}
            </span>
          ))}
        </p>
        {children}
      </Subsection>
    </div>
  );
};
