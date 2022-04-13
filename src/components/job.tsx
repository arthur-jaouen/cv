import './job.scss';

import { Company, CompanyProps } from 'src/components/company';
import { Message, MessageType } from 'src/components/i18n/message';

import { Dayjs } from 'dayjs';
import { Duration } from 'src/components/i18n/duration';
import { FaCircle } from 'react-icons/fa';
import { Icon } from './icons/icon';
import React from 'react';
import { Subsection } from 'src/components/subsection';

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

export class Job extends React.Component<JobProps> {
    render() {
        const { start, end, company, title, description, languages, databases, frameworks } = this.props;

        return (
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
    }
}
