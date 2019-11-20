import { Moment } from 'moment';
import React from 'react';
import { FaCircle } from 'react-icons/fa';

import { Company, CompanyProps } from 'src/components/company';
import { Duration } from 'src/components/i18n/duration';
import { Message, MessageType } from 'src/components/i18n/message';
import { Subsection } from 'src/components/subsection';

import './job.scss';

import { Icon } from './icons/icon';

export type JobProps = {
    start: Moment;
    end: Moment;
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
                            {start.format('MMMM YYYY')} - {end.format('MMMM YYYY')} (
                            <Duration start={start} end={end} />)
                        </>
                    }
                >
                    <h4 className="job-title">
                        <Message msg={title} />
                    </h4>
                    <p className="job-tools">
                        {languages.map(l => (
                            <span className="job-tool">{l}</span>
                        ))}
                        <Icon icon={FaCircle} color="#00e76d" />
                        {frameworks.map(f => (
                            <span className="job-tool">{f}</span>
                        ))}
                        <Icon icon={FaCircle} color="#00e76d" />
                        {databases.map(d => (
                            <span className="job-tool">{d}</span>
                        ))}
                    </p>
                    <Message msg={description} />
                </Subsection>
            </div>
        );
    }
}
