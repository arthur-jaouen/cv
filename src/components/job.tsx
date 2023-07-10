import { Dayjs } from 'dayjs';
import { FunctionComponent } from 'react';
import { FaCircle } from 'react-icons/fa';
import { Company, CompanyProps } from 'src/components/company';
import { Duration } from 'src/components/i18n/duration';
import { Message, MessageType } from 'src/components/i18n/message';
import { Subsection } from 'src/components/subsection';
import { Icon } from './icons/icon';

import './job.scss';

export type JobProps = {
    start: Dayjs;
    end: Dayjs;
    company?: CompanyProps;
    title: MessageType;
    description: MessageType;
    languages: string[];
    databases: string[];
    frameworks: string[];
};

export const Job: FunctionComponent<JobProps> = ({
    start,
    end,
    company,
    title,
    description,
    languages,
    databases,
    frameworks,
}) => (
    <div className="job">
        <div className="job-company">{company ? <Company {...company} /> : null}</div>
        <Subsection
            title={
                <>
                    {start.format('MMM YYYY')} - {end.format('MMM YYYY')} (
                    <Duration start={start} end={end} />)
                </>
            }
        >
            <h4 className="job-title">
                <Message msg={title} />
            </h4>
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
            <Message msg={description} />
        </Subsection>
    </div>
);
