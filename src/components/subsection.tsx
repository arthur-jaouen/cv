import './subsection.scss';

import { Message, MessageType } from 'src/components/i18n/message';

import { FaSquare } from 'react-icons/fa';
import { Icon } from 'src/components/icons/icon';
import React from 'react';

export type SubsectionProps = {
    title: MessageType;
    children?:React.ReactNode
};

export class Subsection extends React.Component<SubsectionProps> {
    render() {
        const { title, children } = this.props;

        return (
            <article>
                <p className="subsection-title">
                    <Icon icon={FaSquare} color="#009a49" />
                    <Message msg={title} />
                </p>
                <div className="subsection-content">{children}</div>
            </article>
        );
    }
}
