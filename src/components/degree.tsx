import { Dayjs } from 'dayjs';
import { FunctionComponent } from 'react';
import { Message, MessageType } from 'src/components/i18n/message';
import { Subsection } from 'src/components/subsection';

import './degree.scss';

export type DegreeProps = {
    start?: Dayjs;
    end: Dayjs;
    title: MessageType;
    description: MessageType;
};

export const Degree: FunctionComponent<DegreeProps> = ({ start, end, title, description }) => (
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
