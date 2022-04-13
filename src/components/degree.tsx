import './degree.scss';

import { Message, MessageType } from 'src/components/i18n/message';

import { Dayjs } from 'dayjs';
import React from 'react';
import { Subsection } from 'src/components/subsection';

export type DegreeProps = {
    start?: Dayjs;
    end: Dayjs;
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
