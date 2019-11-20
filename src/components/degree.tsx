import { Moment } from 'moment';
import React from 'react';

import { Message, MessageType } from 'src/components/i18n/message';
import { Subsection } from 'src/components/subsection';

import './degree.scss';

export type DegreeProps = {
    start?: Moment;
    end: Moment;
    title: MessageType;
    description: MessageType;
};

export class Degree extends React.Component<DegreeProps> {
    render() {
        const { start, end, title, description } = this.props;

        return (
            <div className="degree">
                <Subsection title={(start ? start.format('YYYY') + ' - ' : '') + end.format('YYYY')}>
                    <h4 className="degree-title">
                        <Message msg={title} />
                    </h4>
                    <p className="degree-description">
                        <Message msg={description} />
                    </p>
                </Subsection>
            </div>
        );
    }
}
