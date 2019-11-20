import React from 'react';
import { FaSquare } from 'react-icons/fa';

import { Message, MessageType } from 'src/components/i18n/message';
import { Icon } from 'src/components/icons/icon';

import './subsection.scss';

export type SubsectionProps = {
    title: MessageType;
};

export class Subsection extends React.Component<SubsectionProps> {
    render() {
        const { title, children } = this.props;

        return (
            <div className="subsection">
                <p className="subsection-title">
                    <Icon icon={FaSquare} color="#009a49" />
                    <Message msg={title} />
                </p>
                <div className="subsection-content">{children}</div>
            </div>
        );
    }
}
