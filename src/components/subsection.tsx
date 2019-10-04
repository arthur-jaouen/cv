import React from 'react';
import { FaSquare } from 'react-icons/fa';

import { Icon } from 'src/components/icons/icon';
import { Message, MessageProps } from 'src/components/message';

import './subsection.scss';

export type SubsectionProps = {
    title: MessageProps;
};

export class Subsection extends React.Component<SubsectionProps> {
    render() {
        const { title, children } = this.props;

        return (
            <div className="subsection">
                <p className="subsection-title">
                    <Icon icon={FaSquare} color="#009a49" />
                    <Message {...title} />
                </p>
                <div className="subsection-content">{children}</div>
            </div>
        );
    }
}
