import { Moment } from 'moment';
import React from 'react';

import { Message, MessageProps } from 'src/components/message';
import { Subsection } from 'src/components/subsection';

import './job.scss';

export type JobProps = {
    start: Moment;
    end: Moment;
    company: string;
    title: MessageProps;
    description: MessageProps;
    languages?: string[];
    databases?: string[];
    frameworks?: string[];
};

export class Job extends React.Component<JobProps> {
    render() {
        const { start, end, company, title, description, languages, databases, frameworks } = this.props;

        return (
            <div className="job">
                <Subsection
                    title={{
                        en: start.format('MMMM YYYY') + ' - ' + end.format('MMMM YYYY'),
                        fr: start.format('MMMM YYYY') + ' - ' + end.format('MMMM YYYY')
                    }}
                >
                    <h5 className="job-company">{company}</h5>
                    <h4 className="job-title">
                        <Message {...title} />
                    </h4>
                    <p className="job-description">
                        <Message {...description} />
                    </p>
                    {languages ? (
                        <p className="job-addendum job-languages">
                            <b>
                                <Message en="Languages" fr="Langages" /> :
                            </b>{' '}
                            {languages.join(', ')}
                        </p>
                    ) : null}
                    {databases ? (
                        <p className="job-addendum job-databases">
                            <b>
                                <Message en="Databases" fr="BDD" /> :
                            </b>{' '}
                            {databases.join(', ')}
                        </p>
                    ) : null}
                    {frameworks ? (
                        <p className="job-addendum job-frameworks">
                            <b>
                                <Message en="Frameworks" fr="Frameworks" /> :
                            </b>{' '}
                            {frameworks.join(', ')}
                        </p>
                    ) : null}
                </Subsection>
            </div>
        );
    }
}
