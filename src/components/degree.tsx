import { Moment } from 'moment';
import React from 'react';

import { Message, MessageProps } from 'src/components/message';
import { Subsection } from 'src/components/subsection';

import './degree.scss';

export type DegreeProps = {
    start?: Moment;
    end: Moment;
    title: MessageProps;
    description: MessageProps;
};

export class Degree extends React.Component<DegreeProps> {
    render() {
        const { start, end, title, description } = this.props;

        return (
            <div className="degree">
                <Subsection
                    title={{
                        en: (start ? start.format('YYYY') + ' - ' : '') + end.format('YYYY'),
                        fr: (start ? start.format('YYYY') + ' - ' : '') + end.format('YYYY')
                    }}
                >
                    <h4 className="degree-title">
                        <Message {...title} />
                    </h4>
                    <p className="degree-description">
                        <Message {...description} />
                    </p>
                </Subsection>
            </div>
        );
    }
}
