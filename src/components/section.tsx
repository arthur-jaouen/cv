import React from 'react';
import { IconType } from 'react-icons';

import { Icon } from 'src/components/icons/icon';
import { Message, MessageProps } from 'src/components/message';

import './section.scss';

export type SectionProps = {
    title: MessageProps;
    icon: IconType;
};

export class Section extends React.Component<SectionProps> {
    render() {
        const { title, icon, children } = this.props;

        return (
            <div className="section">
                <h3 className="section-title">
                    <Icon icon={icon} /> <Message {...title} />
                </h3>
                {children}
            </div>
        );
    }
}
