import React from 'react';
import { IconType } from 'react-icons';

import { Message, MessageType } from 'src/components/i18n/message';
import { Icon } from 'src/components/icons/icon';

import './section.scss';

export type SectionProps = {
    title: MessageType;
    icon: IconType;
    className?: string;
};

export class Section extends React.Component<SectionProps> {
    render() {
        const { title, icon, className, children } = this.props;

        return (
            <section className={className}>
                <h3 className="section-title">
                    <Icon icon={icon} /> <Message msg={title} />
                </h3>
                {children}
            </section>
        );
    }
}
